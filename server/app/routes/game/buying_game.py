from flask import Blueprint, request, jsonify
from ...services.sending_mail import send_mail
from ...configdb import db_find, db_connect, db_update, db_insert
from ...models.UserDto import UserDto
from bson import ObjectId
from datetime import date
from uuid import uuid4

buying_game_router = Blueprint('BuyingGame', __name__, url_prefix="/api")

# Страница игры, подробна инфа о ней и ТД
@buying_game_router.post('/buying_game')
def buying_game():
    data_game = request.get_json()["id_game"]
    session = request.cookies.get("session")

    db = db_connect()
    collections_users = db.Users
    collections_product = db.Product
    collections_purchased = db.Purchased

    old_user_data = db_find(collections_users, {"session": session})
    user_data = UserDto(old_user_data).get_dict()
    time = str(date.today())
    for id_game in data_game:
        key = str(uuid4())
        if db_find(collections_users, {"session": session,"cart": id_game}) != None:
            game_data = db_find(collections_product, {"_id": ObjectId(id_game)})
            try:
                status = "false"
                subject = f"Вы приобрели черкаш от DMD"
                text = f"""Спасибо за покупку на нашем сайте DMD!\nПриобретенная игра: {game_data["name"]}!\nПокупатель: {user_data["username"]} \nПочта: {user_data["email"]}\nДата покупки: {time}\nКлюч активации:{key}"""
                status = send_mail(user_data["email"], subject, text)

                if status == "true":
                    db_update(collections_users, {"session": session}, {"cart": id_game}, pull=True)
                    db_insert(collections_purchased, {
                                                    "game_id": id_game,
                                                    "user_id": user_data["id"],
                                                    "date": time
                                                    })
                    data = {"message": "Товар приобретен!", "status": "done"}
            except:
                data = {"message": "Что-то то пошло не так!", "status": "error"}
        else:
            data = {"message": "В корзине нет такой игры!", "status": "error"}
    return jsonify(data)

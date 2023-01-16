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
    games = request.get_json()
    session = request.cookies.get("session")

    db = db_connect()
    collections_users = db.Users
    collections_product = db.Product
    collections_purchased = db.Purchased

    old_user_data = db_find(collections_users, {"session": session})
    user_data = UserDto(old_user_data).get_dict()
    time = str(date.today())

    for game in games:
        print(game)
        key = str(uuid4())
        if db_find(collections_users, {"session": session, "cart": game['id']}) != None:
            try:
                if game["discount_percent"] != "0%":
                    cost = game["discount"]
                else:
                    cost = game["cost"]
                status = "false"
                subject = f"Интернет-магазин цифровых товаров «DMD»"
                text = f"""Спасибо за покупку на нашем сайте DMD!
                
                Приобретенный товар: {game["name"]}
                Покупатель: {user_data["username"]}
                Почта: {user_data["email"]}
                Дата покупки: {time}
                Ключ активации: {key}
                Цена: {cost}"""
                status = send_mail(user_data["email"], subject, text)

                if status == "true":
                    db_update(collections_users, {"session": session}, {"cart": game['id']}, pull=True)
                    db_insert(collections_purchased, {
                                                    "game_id": game['id'],
                                                    "user_id": user_data["id"],
                                                    "date": time
                                                    })
                    data = {"message": "Покупка прошла успешно! Инструкция отправлена на почту.", "status": "done"}
            except:
                data = {"message": "Что-то то пошло не так!", "status": "error"}
        else:
            data = {"message": "В корзине нет такой игры!", "status": "error"}
    return jsonify(data)

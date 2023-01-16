from app.configdb import db_update, db_connect, db_find
from flask import Blueprint, request

add_basket_router = Blueprint('AddBasketRouter', __name__, url_prefix="/api")

# Добавление игры в корзину
@add_basket_router.post('/add_basket')
def add_basket():
    game_id = request.get_json()["game_id"]

    try:
        session = request.cookies.get("session")
        db = db_connect()
        collections = db.Users

        if db_find(collections, {"session": session, "cart": game_id}) == None:
            db_update(collections, {"session": session}, {"cart": game_id}, push=True)
            data = {'status': 'done', "message": "Игра добавлена в корзину!"}
        else:
            data = {'status': 'error', "message": "Игра уже у вас в корзине!"}
    except:
        data = {'status': 'error'}

    return data

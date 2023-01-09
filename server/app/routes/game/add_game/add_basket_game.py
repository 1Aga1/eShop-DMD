from server.app.configdb import db_update, db_connect
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

        db_update(collections, {"session": session}, {"cart": game_id}, push=True)
        data = {'status': 'done'}
    except:
        data = {'status': 'error'}

    return data

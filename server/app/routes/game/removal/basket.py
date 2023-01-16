from app.configdb import db_update, db_connect, db_find
from flask import Blueprint, request

removal_basket_router = Blueprint('RemovalBasketRouter', __name__, url_prefix="/api")

# Удаление игры из корзины
@removal_basket_router.post('/remove_basket')
def removal_basket():
    game_id = request.get_json()["game_id"]

    try:
        session = request.cookies.get("session")
        db = db_connect()
        collections = db.Users

        db_update(collections, {"session": session}, {"cart": game_id}, pull=True)
        data = {'status': 'done'}
    except:
        data = {'status': 'error'}

    return data

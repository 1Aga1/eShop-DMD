from server.app.configdb import db_update, db_connect
from flask import Blueprint, request
from server.app.decorators import login_required

add_basket_router = Blueprint('AddBasketRouter', __name__, url_prefix="/api")

# Добавление игры в корзину
@add_basket_router.post('/add_basket')
@login_required
def add_basket(user):
    game_id = request.get_json()["game_id"]
    try:
        session = user["session"]
        db = db_connect()
        collections = db.Users

        db_update(collections, {"session": session}, {"cart": game_id}, push=True)
        data = {'user': user, 'status': 'done'}
    except:
        data = {'user': user, 'status': 'error'}

    return data

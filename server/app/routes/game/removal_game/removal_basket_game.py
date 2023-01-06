from server.app.configdb import db_update, db_connect
from flask import Blueprint, request
from server.app.decorators import login_required

removal_basket_router = Blueprint('RemovalBasketRouter', __name__, url_prefix="/api")

# Удаление игры из корзины
@removal_basket_router.post('/removal_basket')
@login_required
def removal_basket(user):
    game_id = request.get_json()["game_id"]
    try:
        session = user["session"]
        db = db_connect()
        collections = db.Users

        db_update(collections, {"session": session}, {"cart": game_id}, pull=True)
        data = {'user': user, 'status': 'done'}
    except:
        data = {'user': user, 'status': 'error'}

    return data

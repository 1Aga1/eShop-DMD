from server.app.configdb import db_update, db_connect, db_find
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
        if db_find(collections, {"session": session, "cart": game_id}) == None:
            db_update(collections, {"session": session}, {"cart": game_id}, push=True)
            data = {'user': user, 'status': 'done'}
        else:
            data = {'user': user, 'status': 'message', "message": "Игра уже у вас в корзине!"}
    except:
        data = {'user': user, 'status': 'error'}

    return data

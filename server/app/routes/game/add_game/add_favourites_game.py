from server.app.configdb import db_update, db_connect
from flask import Blueprint, request

add_favourites_router = Blueprint('AddFavouritesRouter', __name__, url_prefix="/api")

# Добавление игры в избранное
@add_favourites_router.post('/add_favourites')
def add_favourites(user):
    game_id = request.get_json()["game_id"]
    try:
        session = user["session"]
        db = db_connect()
        collections = db.Users

        db_update(collections, {"session": session}, {"favourites": game_id}, push=True)
        data = {'user': user, 'status': 'done'}
    except:
        data = {'user': user, 'status': 'error'}

    return data

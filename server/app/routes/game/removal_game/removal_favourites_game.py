from server.app.configdb import db_update, db_connect
from flask import Blueprint, request
from server.app.decorators import login_required

removal_favourites_router = Blueprint('RemovalFavouritesRouter', __name__, url_prefix="/api")

# Удаление игры из избранного
@removal_favourites_router.post('/removal_favourites')
@login_required
def removal_favourites(user):
    game_id = request.get_json()["game_id"]
    try:
        session = user["session"]
        db = db_connect()
        collections = db.Users

        db_update(collections, {"session": session}, {"favourites": game_id}, pull=True)
        data = {'user': user, 'status': 'done'}
    except:
        data = {'user': user, 'status': 'error'}

    return data

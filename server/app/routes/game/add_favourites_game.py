from server.app.configdb import db_update, db_connect
from flask import Blueprint, request
from server.app.decorators import login_required

add_favourites_router = Blueprint('AddFavouritesRouter', __name__, url_prefix="/api")


@add_favourites_router.post('/add_favourites')
@login_required
def add_favourites(user):
    game_id = request.get_json()['game_id']

    try:
        db = db_connect()
        collections = db.User

        db_update(collections, {"_id": user["_id"]}, {"favourites": game_id}, addToSet=True)

        data = {'status': 'done'}
    except:
        data = {'status': 'error'}

    return data

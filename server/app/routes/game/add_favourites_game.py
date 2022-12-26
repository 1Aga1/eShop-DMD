from server.app.configdb import db_find, db_update, db_insert, db_connect
from bson.objectid import ObjectId
from flask import Blueprint
from server.app.decorators import login_required

add_favourites_router = Blueprint('AddFavouritesRouter', __name__, url_prefix="/api")


@add_favourites_router.post('/add_favourites_router')
@login_required
def add_favourites(game_id, data_user):
    try:
        db = db_connect()
        collections = db.User

        db_update(collections, {"_id": data_user["_id"]}, {"favourites": game_id}, addToSet=True)
        data = True
    except:
        data = False

    return data

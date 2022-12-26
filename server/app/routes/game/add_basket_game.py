from ...configdb import db_find, db_update, db_insert, db_connect
from bson.objectid import ObjectId
from flask import Blueprint
from server.app.decorators import login_required

add_basket_router = Blueprint('AddBasketRouter', __name__, url_prefix="/api")


@add_basket_router.post('/add_basket_router')
@login_required
def add_basket(game_id, data_user):
    try:
        db = db_connect()
        collections = db.User

        db_update(collections, {"_id": data_user["_id"]}, {"cart": game_id}, addToSet=True)
        data = True
    except:
        data = False

    return data

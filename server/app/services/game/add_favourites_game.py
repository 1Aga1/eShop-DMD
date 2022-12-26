from ...configdb import db_find, db_update, db_insert, db_connect
from bson.objectid import ObjectId

def add_fovourites_game(game_id, data_user):
    try:
        db = db_connect()
        collections = db.User

        db_update(collections, {"_id": data_user["_id"]}, {"favourites": game_id}, addToSet=True)
        data = True
    except:
        data = False

    return data

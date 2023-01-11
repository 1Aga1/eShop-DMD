from flask import Blueprint, request
from ...configdb import db_find, db_connect
from ...models.GameDto import GameDto
from bson import ObjectId

favourites_router = Blueprint('Favourites', __name__, url_prefix="/api")

# Страница игры, подробна инфа о ней и ТД
@favourites_router.route('/favourites')
def favourites():
    db = db_connect()
    collections = db.Users
    new_game_data = []

    session = request.cookies.get("session")

    user_favourites = db_find(collections, {"session": session})['favourites']

    collections = db.Product

    for game_id in user_favourites:
        game_data = db_find(collections, {"_id": ObjectId(game_id)})
        new_game_data.append(GameDto(game_data).get_dict())

    return new_game_data

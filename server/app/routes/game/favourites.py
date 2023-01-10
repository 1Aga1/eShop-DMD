from flask import Blueprint, request, jsonify
from ...configdb import db_find, db_connect
from ...models.GameDto import GameDto
from bson import ObjectId

favourites_router = Blueprint('Favourites', __name__, url_prefix="/api")

# Страница игры, подробна инфа о ней и ТД
@favourites_router.route('/favourites', methods=["POST", "GET"])
def favourites():
    if request.method == 'GET':
        db = db_connect()
        collections = db.Product
        new_game_data = []

        favourites = request.get_json()["userFavourites"]

        for game_id in favourites:
            game_data = db_find(collections, {"_id": ObjectId(game_id)})
            new_game_data.append(GameDto(game_data).get_dict())
        print(new_game_data)
        return jsonify(new_game_data)
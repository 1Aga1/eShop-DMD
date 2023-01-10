from flask import Blueprint, request, jsonify
from ...configdb import db_find, db_connect
from ...models.GameDto import GameDto
from bson import ObjectId

basket_router = Blueprint('Basket', __name__, url_prefix="/api")

# Страница игры, подробна инфа о ней и ТД
@basket_router.route('/basket', methods=["POST", "GET"])
def basket():
    if request.method == 'GET':
        db = db_connect()
        collections = db.Product
        new_game_data = []
        total_price = 0

        basket = request.get_json()["userBasket"]

        for game_id in basket:
            game_data = db_find(collections, {"_id": ObjectId(game_id)})
            new_game_data.append(GameDto(game_data).get_dict())
            total_price += int(game_data["discount"])

        data = {
            "user_data": new_game_data,
            "total_price": total_price
        }
        print(data)
        return jsonify(new_game_data)
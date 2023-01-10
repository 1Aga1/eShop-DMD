from flask import Blueprint, request, jsonify
from ...configdb import db_find, db_connect
from ...models.GameDto import GameDto
from bson import ObjectId

basket_router = Blueprint('Basket', __name__, url_prefix="/api")

# Страница игры, подробна инфа о ней и ТД
@basket_router.route('/basket')
def basket():
    db = db_connect()
    collections = db.Users
    new_game_data = []
    total_price = 0

    session = request.cookies.get("session")

    user_basket = db_find(collections, {"session": session})['cart']

    collections = db.Product

    for game_id in user_basket:
        game_data = db_find(collections, {"_id": ObjectId(game_id)})
        new_game_data.append(GameDto(game_data).get_dict())

        if game_data['discount_percent'] == "":
            total_price += int(game_data["cost"])
        else:
            total_price += int(game_data["discount"])

    data = {
        "products": new_game_data,
        "total_price": total_price
    }

    return jsonify(data)
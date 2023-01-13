from ...configdb import db_find, db_connect
from flask import Blueprint, request, jsonify
from ...models.UserDto import UserDto
from ...models.PurchasedDto import PurchasedDto
from bson import ObjectId

profile_router = Blueprint('Profile', __name__, url_prefix="/api")

# Регистрация
@profile_router.route('/profile/<id>', methods=["POST","GET"])
def profile(id):
    if request.method == 'GET':
        db = db_connect()
        collections = db.Users
        collections_purchased = db.Purchased

        user_data = db_find(collections, {"_id": ObjectId(id)})
        new_user_data = UserDto(user_data).get_dict()

        purchased_game = db_find(collections_purchased, {"user_id": id})
        new_purchased_game = PurchasedDto(purchased_game).get_dict()

        data = {
            "user_data": new_user_data,
            "purchased_game": new_purchased_game
        }

        return jsonify(data)

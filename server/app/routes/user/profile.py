from ...configdb import db_find, db_connect
from flask import Blueprint, request, jsonify
from server.app.models.UserDto import UserDto

profile_router = Blueprint('Profile', __name__, url_prefix="/api")

# Регистрация
@profile_router.route('/profile/<id>', methods=["POST","GET"])
def profile(id):
    if request.method == 'GET':
        db = db_connect()
        collections = db.Users
        collections_Purchased = db.Purchased
        user_data = db_find(collections, {"_id": id})
        new_user_data = UserDto(user_data).get_dict()
        purchased_game = db_find(collections_Purchased, {"user_id": id})
        data = {
            "user_data": new_user_data,
            "purchased_game": purchased_game
        }

        return jsonify(data)

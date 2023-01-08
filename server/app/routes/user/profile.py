from ...configdb import db_find, db_insert, db_update, db_connect
from flask import Blueprint, request, jsonify
from server.app.decorators import login_required
from server.app.models.UserDto import UserDto

profile_router = Blueprint('Profile', __name__, url_prefix="/api")

# Регистрация
@profile_router.route('/profile/<session>', methods=["POST","GET"])
@login_required
def profile(user, session):
    if request.method == 'GET':
        session = user["session"]
        db = db_connect()
        collections = db.Users
        user_data = db_find(collections, {"session": session})
        new_user_data = UserDto(user_data).get_dict()

        return jsonify(new_user_data)

from flask import request, Blueprint, jsonify
from server.app.configdb import db_connect, db_find


login_required_router = Blueprint('Login_required', __name__, url_prefix="/api")
@login_required_router.route('/login_required', methods=["GET"])
# Проверка сессии
def login_required():
    data = {"message": "Аккаунт не авторизован!", "status": "unauth"}
    session = request.cookies.get("session")
    db = db_connect()
    collections = db.Users

    if not session:
        return jsonify(data)

    user_data = db_find(collections, {"session": session})

    if db_find(collections, {"session": session, "verified_account": 1}) != None:
        data = {"id": str(user_data["_id"]),
                "username": user_data["username"],
                "isAdmin": user_data["isAdmin"],
                "session": user_data["session"],
                "cart": user_data["cart"],
                "favourites": user_data["favourites"],
                "status": "auth"}

    return jsonify(data)

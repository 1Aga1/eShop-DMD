from flask import Blueprint, request, jsonify, make_response
from ...configdb import db_find, db_update, db_connect
from werkzeug.security import check_password_hash, generate_password_hash

changing_password_router = Blueprint('ChangingPassword', __name__, url_prefix="/api")

# Авторизация
@changing_password_router.post('/changing_password')
def changing_password():
    data = request.get_json()

    session = request.cookies.get("session")

    db = db_connect()
    collections = db.Users

    password = data["password"]
    new_password = data["new_password"]

    data_user = db_find(collections, {"session": session})
    if password != new_password:
        if check_password_hash(data_user["password"], password):
            new_password_hach = generate_password_hash(new_password)
            db_update(collections, {"_id": data_user["_id"]}, {"password": new_password_hach}, update=True)
            data = {"message": "Пароль изменен!", "status": "done"}
        else:
            data = {"message": "Введен неверный пароль!", "status": "error"}
    else:
        data = {"message": "Пароль не может быть тот же самый!", "status": "error"}
    return jsonify(data)

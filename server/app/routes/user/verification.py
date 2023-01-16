from flask import Blueprint, jsonify
from app.configdb import db_connect, db_find, db_update

verification_router = Blueprint('Verification', __name__)

# Верификация аккаунта
@verification_router.get('/verification/<session>')
def verification(session):
    db = db_connect()
    collections = db.Users

    if db_find(collections, {"session": session})["verified_account"] == 0:
        if db_find(collections, {"session": session}):
            db_update(collections, {"session": session}, {"verified_account": 1}, update=True)
            status = {"message": "Аккаунт подтвержден!", "status": "done"}
        else:
            status = {"message": "Что-то пошло не так!", "status": "error"}
    else:
        status = {"message": "Ваш аккаунт уже подтвержден!", "status": "done"}

    return jsonify(status)

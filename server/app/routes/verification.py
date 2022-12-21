from flask import Blueprint, request
from ..configdb import db_connect, db_find,db_update

verification_router = Blueprint('Verification', __name__)

@verification_router.get('/verification/<session>')
def verification(session):
    db = db_connect()
    collections = db.Users

    if db_find(collections, {"session": session}):
        db_update(collections, {"session": session}, {"verified_account": 1})
        status = {"message": "Аккаунт подтвержден!"}
    else:
        status = {"message": "Что-то пошло не так!"}
    return status
from ..configdb import db_connect, db_find
from functools import wraps
from flask import request

# Проверка сессии
def login_required(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        data = {"message": "Аккаунт не авторизован!", "status": "unauth"}
        session = request.cookies.get("session")
        db = db_connect()
        collections = db.Users

        if not session:
            return data

        if db_find(collections, {"session": session, "verified_account": 1})!= None:
            data = {"session": db_find(collections, {"session": session})["session"],
                    "username": db_find(collections, {"session": session})["username"],
                    "status": "auth"}
        else:
            return data

        return fn(data, *args, **kwargs)

    return wrapper
from werkzeug.security import check_password_hash
from uuid import uuid4

from app.configdb import db_find, db_connect, db_update

# Авторизация
def authorization(_username, _password):
    db = db_connect()
    collections = db.Users
    if (db_find(collections, {"username": _username}) != None):
        if (db_find(collections, {"username": _username})["verified_account"] == 1):
            password = db_find(collections, {"username": _username})

            if check_password_hash(password["password"], _password):
                session = str(uuid4())
                db_update(collections, {"username": _username}, {"session": session}, update=True)
                data = {"session": session, "username": _username, "status": "done"}
            else:
                data = {"message": "Неверный пароль или имя пользователя!", "status": "error"}
        else:
            data = {"message": "Ваш аккаунт не подтвержден! Проверьте почту.", "status": "error"}
    else:
        data = {"message": "Неверный пароль или имя пользователя!", "status": "error"}

    return data
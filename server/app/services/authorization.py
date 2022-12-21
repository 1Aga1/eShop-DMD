from ..configdb import db_find, db_connect, db_update
from werkzeug.security import check_password_hash
from uuid import uuid4

def authorization(_username, _password):
    db = db_connect()
    collections = db.Users
    if db_find(collections, {"username": _username}) != None:
        password = db_find(collections, {"username": _username})
        if check_password_hash(password["password"], _password):

            session = str(uuid4())
            db_update(collections, {"username": _username}, {"session": session})
            data = {"session": session, "username": _username}
        else:
            data = {"message": "Неверный пароль или имя пользователя!"}
    else:
        data = {"message": "Неверный пароль или имя пользователя!"}
    return data
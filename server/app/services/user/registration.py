from server.app.configdb import db_connect, db_insert, db_find
from werkzeug.security import generate_password_hash
from uuid import uuid4
from ..sending_mail import send_mail
import os

def registration(_username,_email,_password):
    db = db_connect()
    collections = db.Users

    session = str(uuid4())
    if (db_find(collections, {'username': _username}) == None) and (db_find(collections, {'email': _email}) == None):
        try:
            status = "false"
            subject = "Регистрация на сайте DMD"
            text = f"""Вы зарегистрировались на сайте DMD, перейдите по ссылке и подтвердите почту!\nСсылка для подтверждения-> {os.environ.get('API_URL')}/verification/{session}"""
            status = send_mail(_email, subject, text)

            if status == "true":
                db_insert(collections, {
                                        "username": _username,
                                        "email": _email,
                                        "password": generate_password_hash(_password),
                                        "session": session,
                                        "verified_account": 0,
                                        "favourites": [],
                                        "cart": []
                                        })
        except:
            data = {"message": "Не удалось отправить письмо по указанному адресу!", "status": "error"}
            return data

        data = {"message": "Регистрация прошла успешно!", "status": "done"}
    else:
        data = {"message": "Пользователь с такими данными уже существует!", "status": "error"}

    return data
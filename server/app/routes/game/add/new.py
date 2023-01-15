from server.app.configdb import db_connect, db_find, db_insert
from flask import Blueprint, request, jsonify

new_game_router = Blueprint('NewGame', __name__, url_prefix="/api")

# Добавление игры в избранное
@new_game_router.post('/new_product')
def new_game():
    data_game = request.get_json()
    db = db_connect()
    collections = db.Product

    print(data_game)

    data_game['discount_percent'] = str(data_game['discount_percent']) + "%"

    if db_find(collections, {"name": data_game["name"]}) == None:
        db_insert(collections, data_game)
        data = {"message": "Игра добавлена в каталог!", "status": "done"}
    else:
        data = {"message": "Игра уже существует!", "status": "error"}

    return jsonify(data)

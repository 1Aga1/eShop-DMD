from server.app.configdb import db_update, db_connect, db_find, db_insert, db_delete
from flask import Blueprint, request, jsonify
from bson import ObjectId

delete_game_router = Blueprint('DeleteGame', __name__, url_prefix="/api")

# Добавление игры в избранное
@delete_game_router.post('/delete_product')
def delete_game():
    id_game = request.get_json()
    db = db_connect()
    collections = db.Product

    if db_find(collections, {"_id": ObjectId(id_game["game_id"])}) != None:
        status = db_delete(collections, {"_id": ObjectId(id_game["game_id"])})
        if status == "done":
            data = {"message": "Игра удалена из каталога!", "status": "done"}
        else:
            data = {"message": "Что-то пошло не так!", "status": "error"}
    else:
        data = {"message": "Такой игры нету!", "status": "error"}

    return jsonify(data)

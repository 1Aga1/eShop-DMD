from server.app.configdb import db_update, db_connect, db_find
from flask import Blueprint, request

add_favourites_router = Blueprint('AddFavouritesRouter', __name__, url_prefix="/api")

# Добавление игры в избранное
@add_favourites_router.post('/add_favourites')
def add_favourites():
    game_id = request.get_json()["game_id"]
    try:
        session = request.cookies.get("session")
        db = db_connect()
        collections = db.Users

        if db_find(collections, {"session": session, "favourites": game_id}) == None:
            db_update(collections, {"session": session}, {"favourites": game_id}, push=True)
            data = {'status': 'done'}
        else:
            data = {'status': 'error', "message": "Игра уже добавлена в избранное!"}
    except:
        data = {'status': 'error'}

    return data

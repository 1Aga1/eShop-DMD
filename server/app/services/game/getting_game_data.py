from ...configdb import db_find, db_connect
from ...models.GameDto import GameDto
from bson import ObjectId


# Получение данных о игре
def getting_game_data(game_id):
    db = db_connect()
    collections = db.Product

    game_data = db_find(collections, {"_id": ObjectId(game_id)}, multiple=True)

    new_game_data = [GameDto(game).get_dict() for game in game_data]

    return new_game_data

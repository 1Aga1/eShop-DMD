from ...configdb import db_find, db_connect
from server.app.models.GameDto import GameDto

# Получение данных о игре
def getting_game_data(game_id):
    db = db_connect()
    collections_product = db.Product

    game_data = db_find(collections_product, {"_id": game_id})

    print(game_data)
    new_game_data = GameDto(game_data).get_dict()

    return new_game_data

from ...configdb import db_find, db_update, db_connect, db_insert
from server.app.models.GameDto import GameDto

# Получение данных о игре
def getting_game_data(data_user, game_id):
    db = db_connect()
    collections_users = db.Users
    collections_product = db.Product

    game_data = db_find(collections_product, {"_id": game_id})
    new_game_data = GameDto(game_data).get_dict()

    return new_game_data


    # Тут похожие игры
    # db_find(collections_product, {"ganre": game_data["information_game"]["ganre"][0]})

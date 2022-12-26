from flask import Blueprint, request, jsonify
from server.app.decorators import login_required
from ...services import getting_game_data

game_page_router = Blueprint('GamePage', __name__, url_prefix="/api")

@game_page_router.route('/game/<game_id>', methods=["POST", "GET"])
@login_required
def game_page(data_user, game_id):
    if request.method == 'GET':
        game_data = getting_game_data(data_user, game_id)

        return jsonify(game_data)

    # if request.method == "POST":
    #     print("a")
    #     action = request.get_json()
    #     print(action)
    #     if action['move'] == "basket":
    #         if add_basket_game(game_id, data_user):
    #             data = {"message": "Игра добавлена в корзину!"}
    #         else:
    #             data = {"message": "Что-то пошло не так!"}
    #
    #     if action['move'] == "favourites":
    #         if add_favourites_game(game_id, data_user):
    #             data = {"message": "Игра добавлена в избранное!"}
    #         else:
    #             data = {"message": "Что-то пошло не так!"}
    #
    #     return data

# Занесение игр в БД
# db_insert(collections_product, {
#                                     "name": "Grand Theft Auto V",
#                                     "cost": "1999",
#                                     "discount": "999",
#                                     "information_game": {
#                                                         "genre": "Приключенческий боевик",
#                                                         "platforms": "PS, XBOX, PC",
#                                                         "release_data": "17 сентября 2013",
#                                                         "publisher": "Rockstar Game, Take-Two Interactive"
#                                                         },
#                                     "abaut_game": """Когда молодой уличный жулик, отставной грабитель банков и опасный
#                                     для общества психопат оказываются втянуты в разборки с самыми пугающими и
#                                     сумасшедшими представителями криминального мира, правительства США и
#                                     индустрии развлечений, им приходится выполнить серию рискованных
#                                     налетов, чтобы выжить в безжалостном городе, где они не могут
#                                     доверять никому – и в первую очередь друг другу.""",
#                                     "screenshots": "",
#                                     "picture": ""
#                                     })
from flask import Blueprint, request, jsonify
from ...services import getting_game_data

game_page_router = Blueprint('GamePage', __name__, url_prefix="/api")

# Страница игры, подробна инфа о ней и ТД
@game_page_router.route('/game/<game_id>', methods=["POST", "GET"])
def game_page(data_user, game_id):
    if request.method == 'GET':
        game_data = getting_game_data(data_user, game_id)

        return jsonify(game_data)
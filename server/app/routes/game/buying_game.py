from flask import Blueprint, request
from ...configdb import db_find, db_connect
from ...models.GameDto import GameDto
from bson import ObjectId

buying_game_router = Blueprint('BuyingGame', __name__, url_prefix="/api")

# Страница игры, подробна инфа о ней и ТД
@buying_game_router.route('/buying_game')
def buying_game():
    db = db_connect()
    collections = db.Users


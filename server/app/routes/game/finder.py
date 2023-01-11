from flask import Blueprint, request
from ...configdb import db_find, db_connect
from ...models.GameDto import GameDto

finder_router = Blueprint('Finder', __name__, url_prefix="/api")

# Страница игры, подробна инфа о ней и ТД
@finder_router.route('/search', methods=["POST"])
def search():
    if request.method == "POST":
        search_term = request.get_json().lower()
        search_result = []

        db = db_connect()
        collections = db.Product

        products = db_find(collections, {}, multiple=True)

        for product in products:
            if product['name'].lower().find(search_term) != -1:
                search_result.append(GameDto(product).get_dict())

        return search_result

from flask import Blueprint, jsonify

from ..configdb import db_connect, db_find

general_router = Blueprint('General', __name__, url_prefix="/api")

# Главная страница
@general_router.route('/general', methods=["GET"])
def general():
    db = db_connect()
    collections = db.Product

    products = db_find(collections, {}, multiple=True)

    for product in products:
        product['_id'] = str(product['_id'])

    data = {'products': products}

    return jsonify(data)

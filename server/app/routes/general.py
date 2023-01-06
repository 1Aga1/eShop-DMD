from flask import Blueprint, jsonify

from ..decorators.login_required import login_required
from ..configdb import db_connect, db_find

general_router = Blueprint('General', __name__, url_prefix="/api")

# Главная страница
@general_router.route('/general', methods=["GET"])
@login_required
def general(user):
    db = db_connect()
    collections = db.Product

    if user['status'] == 'unauth':
        data = {'user': user, 'products': None}
        return jsonify(data)

    products = db_find(collections, {})

    data = {'user': user, 'products': products}

    return jsonify(data)




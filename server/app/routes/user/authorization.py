from flask import Blueprint, request, jsonify, make_response
from server.app.services import authorization

authorization_router = Blueprint('Authorization', __name__, url_prefix="/api")

# Авторизация
@authorization_router.route('/auth', methods=["POST"])
def signup():
    if request.method == 'POST':
        auth_data = request.get_json()

        _username = auth_data["username"]
        _password = auth_data["password"]

        data = authorization(_username, _password)

        if data['status'] != "error":
            res = make_response(data)

            res.set_cookie("session", data["session"], max_age=60*60*24*7)

            return res

        else:
            return jsonify(data)

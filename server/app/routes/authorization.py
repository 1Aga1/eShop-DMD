from flask import Blueprint, request, jsonify, make_response
from ..services import authorization

authorization_router = Blueprint('Authorization', __name__, url_prefix="/api")


@authorization_router.route('/auth', methods=["POST"])
def signup():
    if request.method == 'POST':
        auth_data = request.get_json()

        _username = auth_data["username"]
        _password = auth_data["password"]

        data = authorization(_username, _password)

        res = make_response(jsonify(data))

        res.set_cookie("session", data["session"], max_age=60*60*24*7)

        return res

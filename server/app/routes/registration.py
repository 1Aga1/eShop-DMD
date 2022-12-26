from flask import Blueprint, request, jsonify
from ..services.user.register_service import registration


registration_router = Blueprint('SingUp', __name__, url_prefix="/api")

@registration_router.route('/register', methods=["POST"])
def signup():
    if request.method == 'POST':
        req_data = request.get_json()

        _username = req_data["username"]
        _email = req_data["email"]
        _password = req_data["password"]
        confirm_password = req_data["confirm_password"]

        if _password == confirm_password:
            data = registration(_username, _email, _password)
        else:
            data = {"message": "Пароли не совпадают!", "status": "error"}

        return jsonify(data)

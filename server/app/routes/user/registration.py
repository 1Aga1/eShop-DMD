from flask import Blueprint, request, jsonify
from server.app.services import registration

registration_router = Blueprint('SingUp', __name__, url_prefix="/api")

# Регистрация
@registration_router.route('/register', methods=["POST"])
def signup():
    if request.method == 'POST':
        reg_data = request.get_json()

        _username = reg_data["username"]
        _email = reg_data["email"]
        _password = reg_data["password"]
        confirm_password = reg_data["confirm_password"]

        if _password == confirm_password:
            data = registration(_username, _email, _password)
        else:
            data = {"message": "Пароли не совпадают!", "status": "error"}

        return jsonify(data)

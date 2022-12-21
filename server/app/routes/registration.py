from flask import Blueprint, request, jsonify
from server.app.services import registration

registration_router = Blueprint('SingUp', __name__)

@registration_router.route('/reg', methods=["POST"])
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
            data = {"message": "Пароли не совпадают!"}
        return jsonify(data)
from flask import Blueprint, request, jsonify
from flask_cors import cross_origin

SignUp = Blueprint('SignUp', __name__)

@SignUp.route('/SignUp', methods=['GET', 'POST'])
@cross_origin()
def post():
    req_data = request.get_json()

    _username = req_data["username"]
    _email = req_data["email"]
    _password = req_data["password"]
    _confirm_password = req_data["confirm_password"]

    print(req_data)

    return jsonify({
        "_username": _username,
        "_email": _email,
        "_password": _password,
        "_confirm_password": _confirm_password,
    })

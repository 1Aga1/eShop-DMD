from flask import Blueprint, request, jsonify

reg = Blueprint('reg', __name__)

@reg.route('/reg', methods=['GET', 'POST'])
def post():
    req_data = request.get_json()

    _username = req_data["username"]
    _email = req_data["email"]
    _password = req_data["password"]
    _confirm_password = req_data["confirm_password"]

    # return render_template('sign_up.html')
    return jsonify({
        "_username": _username,
        "_email": _email,
        "_password": _password,
        "_confirm_password": _confirm_password
    }), 200
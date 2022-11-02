import json

from flask import Blueprint, render_template, request

signup = Blueprint('signup', __name__)

@signup.route('/sign_up', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'GET':
        return render_template('sign_up.html')

    if request.method == 'POST':
        values = json.loads(request.form['values'])

        print(values)

        status = 'true'
        return status

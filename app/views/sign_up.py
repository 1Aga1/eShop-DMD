from flask import Blueprint, render_template

signup = Blueprint('signup', __name__)

@signup.route('/sign_up', methods=['GET', 'POST'])
def sign_up():
    return render_template('sign_up.html')

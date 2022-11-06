from flask import Flask
from .api import *

app = Flask(__name__)

app.register_blueprint(SignUp)




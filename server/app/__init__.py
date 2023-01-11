import dotenv

from flask import Flask
from flask_cors import CORS

from .routes import *

app = Flask(__name__)
CORS(app)

dotenv.load_dotenv()

app.register_blueprint(registration_router)
app.register_blueprint(verification_router)
app.register_blueprint(authorization_router)
app.register_blueprint(logout_router)
app.register_blueprint(login_required_router)

app.register_blueprint(general_router)

app.register_blueprint(profile_router)
app.register_blueprint(favourites_router)
app.register_blueprint(basket_router)

app.register_blueprint(game_page_router)

app.register_blueprint(add_basket_router)
app.register_blueprint(add_favourites_router)

app.register_blueprint(removal_basket_router)
app.register_blueprint(removal_favourites_router)

app.register_blueprint(finder_router)

app.register_blueprint(new_game_router)
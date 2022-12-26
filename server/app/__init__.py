from flask import Flask
import dotenv

from .routes import registration_router, verification_router, authorization_router, logout_router, game_page_router, add_basket_router, add_favourites_router

app = Flask(__name__)

dotenv.load_dotenv()

app.register_blueprint(registration_router)
app.register_blueprint(verification_router)
app.register_blueprint(authorization_router)
app.register_blueprint(logout_router)
app.register_blueprint(game_page_router)

app.register_blueprint(add_basket_router)
app.register_blueprint(add_favourites_router)

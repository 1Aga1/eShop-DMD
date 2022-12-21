from flask import Flask
import dotenv

from .routes import registration_router, verification_router, authorization_router

app = Flask(__name__)
dotenv.load_dotenv()

app.register_blueprint(registration_router)
app.register_blueprint(verification_router)
app.register_blueprint(authorization_router)
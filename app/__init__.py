from flask import Flask

from .views import *

# Конфигурция запуска приложения
app = Flask(__name__)
app.config.from_pyfile('config.py')

# Регистрация blueprint
app.register_blueprint(signup)

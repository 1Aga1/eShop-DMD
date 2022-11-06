from flask_cors import CORS
from app import app

CORS(app)

# Запускаем приложение
if __name__ == '__main__':
    app.run(debug=True)

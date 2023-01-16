import os
from .app import app

# Запускаем приложение
if __name__ == '__main__':
    app.run(debug=os.environ.get("DEBUG"))

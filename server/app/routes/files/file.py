import os
from flask import Blueprint, send_file

file_router = Blueprint('File', __name__, url_prefix="/api")

# Добавление игры в избранное
@file_router.get('/app/images/<id>')
def file(id):
    url = os.path.abspath(f'app/images/{id}')
    try:
        return send_file(url, download_name=id)
    except:
        url = os.path.abspath(f'app/images/404.png')

        return send_file(url, download_name="404.png")

import os
from flask import Blueprint, send_file

file_router = Blueprint('File', __name__, url_prefix="/api")

# Добавление игры в избранное
@file_router.get('/app/images/<id>')
def file(id):
    url = os.path.abspath(f'app/images/{id}')
    return send_file(url, download_name=id)

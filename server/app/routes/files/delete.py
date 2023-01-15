import os
import collections.abc
from flask import Blueprint, request

delete_file_router = Blueprint('DeleteFile', __name__, url_prefix="/api")

# Добавление игры в избранное
@delete_file_router.post('/delete_file')
def delete_file():
    id = request.get_json()

    try:
        if isinstance(id, collections.abc.Sequence):
            for file_id in id:
                os.remove(os.path.abspath(f'app/images/{file_id}'))
        else:
            os.remove(os.path.abspath(f'app/images/{id}'))

        status = {"status": "done"}
    except:
        status = {"status": "error"}

    return status

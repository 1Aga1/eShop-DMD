import os
from flask import Blueprint, request
from filehash import FileHash

upload_file_router = Blueprint('UploadFile', __name__, url_prefix="/api")

# Добавление игры в избранное
@upload_file_router.post('/upload_file')
def upload_file():
    file = request.files['file']
    filename, file_extension = os.path.splitext(file.filename)

    upload_folder = os.environ.get("UPLOAD_FOLDER")
    api_url = os.environ.get("API_URL")

    if not os.path.isdir(upload_folder):
        os.makedirs(upload_folder)

    destination = "/".join([upload_folder, file.filename])
    file.save(destination)

    hasher = FileHash('md5')

    file_hash = hasher.hash_file(destination) + file_extension

    filename = "/".join([upload_folder, file_hash])

    try:
        os.rename(destination, filename)
    except:
        os.remove(destination)

    filename = api_url + "/" + filename

    return {"status": "done", "filename": filename}

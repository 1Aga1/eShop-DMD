import pymongo
import os

client = pymongo.MongoClient(f"{os.environ.get('DB')}")

# Подключение к БД
def db_connect():
    db = client["eSHOP-DMD"]
    return db

# Ввод данных в БД
def db_insert(collection, data):
    return collection.insert_one(data)

# Поиск в БД
def db_find(collection, elements, multiple=False):
    if multiple:
        try:
            data = collection.find(elements)
            return [r for r in data]
        except pymongo.errors.ConnectionFailure as err:
            print(f"БД -> '{err}'")
    else:
        try:
            return collection.find_one(elements)
        except pymongo.errors.ConnectionFailure as err:
            print(f"БД -> '{err}'")

# Обновление данных в БД

# pull - Удаление эллемента массива
# update - Простое занесение данных
# push - Добавление эллемента в массив
def db_update(collection, elements, new_values, pull=False, update=False, push=False):
    try:
        if push:
            collection.update_one(elements, {"$push": new_values})
        elif update:
            collection.update_one(elements, {"$set": new_values})
        elif pull:
            collection.update_one(elements, {"$pull": new_values})
        data = {"message": "done"}
    except:
        data = {"message": "error"}

    return data

# Удаление данных
def db_delete(collection, elements, many=False):
    try:
        if many:
            collection.delete_many(elements)
        else:
            collection.delete_one(elements)
        data = "done"
    except:
        data = "error"
    return data

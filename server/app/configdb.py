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
def db_update(collection, elements, new_values, addToSet = False):
    try:
        if addToSet:
            collection.update_one(elements, {"$set": new_values}, upsert=True)
        else:
            collection.update_one(elements, {"$addToSet": new_values}, upsert=True)
        data = {"message": "done"}
    except:
        data = {"message": "error"}
    return data
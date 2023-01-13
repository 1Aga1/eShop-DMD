class PurchasedDto:
    def __init__(self, object):
        self.id = str(object['_id'])
        self.game_id = object['game_id']
        self.user_id = object['user_id']
        self.date = object['date']

    def get_dict(self):
        return self.__dict__

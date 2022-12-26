class GameDto:
    def __init__(self, object):
        self.id = str(object['_id'])
        self.name = object['name']
        self.cost = object['cost']
        self.discount = object['discount']
        self.information_game = object['information_game']
        self.abaut_game = object['abaut_game']
        self.screenshots = object['screenshots']
        self.picture = object['picture']

    def get_dict(self):
        return self.__dict__

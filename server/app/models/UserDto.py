class UserDto:
    def __init__(self, object):
        self.id = str(object['_id'])
        self.username = object['username']
        self.email = object['email']
        self.password = object['password']
        self.session = object['session']
        self.verified_account = object['verified_account']
        self.favourites = object['favourites']
        self.cart = object['cart']
        self.isAdmin = object['isAdmin']
        self.avatar = object['avatar']

    def get_dict(self):
        return self.__dict__

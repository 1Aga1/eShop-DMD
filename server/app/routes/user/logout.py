from flask import Blueprint, jsonify, make_response, request

logout_router = Blueprint('logout', __name__)

@logout_router.get('/logout')
def logout():
    data = {"status": "done"}
    res = make_response(jsonify(data))

    res.set_cookie("session", "0", max_age=0)

    return res

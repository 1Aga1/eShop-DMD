from flask import Blueprint, make_response, request

logout_router = Blueprint('logout', __name__, url_prefix="/api")

# Закрытие сессии
@logout_router.route('/logout', methods=["POST"])
def logout():
    data = {"status": "error"}
    if request.method == "POST":
        data = {"status": "done"}
        res = make_response(data)

        res.set_cookie("session", "0", max_age=0)

        return res

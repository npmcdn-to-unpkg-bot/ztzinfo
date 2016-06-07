from flask import Blueprint
from flask import send_file



admin = Blueprint(
    'admin',
    __name__,
    static_folder='static',
    template_folder='templates'
    )

@admin.route('/')
def index():
    return admin_app.send_static_file('index.html')

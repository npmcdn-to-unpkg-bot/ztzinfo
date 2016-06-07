from flask import Blueprint
from flask import send_file



admin_app = Blueprint(
    'admin',
    __name__,
    static_folder='static',
    template_folder='templates'
    )

@admin_app.route('/')
def index():
    return admin_app.send_static_file('admin/index.html')

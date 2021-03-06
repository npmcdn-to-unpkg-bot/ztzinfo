from ..config import DevelopmentConfig

from flask import abort
from flask import Blueprint
from flask import g
from flask import jsonify
from flask import request
from flask import send_file
from flask import url_for

from flask_httpauth import HTTPBasicAuth

from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

from ..models import User, Base

auth = HTTPBasicAuth()

from ..dbconn import session

admin = Blueprint(
    'admin', __name__, static_folder='static'
    )

@admin.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    # response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response


@auth.verify_password
def verify_password(username_or_token, password):
    #Try to see if it's a token first
    user_id = User.verify_auth_token(username_or_token)
    if user_id:
        user = session.query(User).filter_by(id=user_id).one()
    else:
        user = session.query(User).filter_by(username=username_or_token).first()
        if not user or not user.verify_password(password):
            return False
    g.user = user
    return True


@admin.route('/token',)
@auth.login_required
def get_auth_token():
    token = g.user.generate_auth_token()
    return jsonify({'token': token.decode('utf-8')})


@admin.route('/')
def index():
    return admin.send_static_file('index.html')

@admin.route('/post', methods=['GET', 'POST'])
@auth.login_required
def new_post():
    print(dir(request))
    print(request.authorization)
    print(request.headers)

    return 'New Post'

@admin.route('/posts', methods=['GET', 'POST'])
@auth.login_required
def new_posts():
    print(dir(request))
    print(request.authorization)
    print(request.headers)
    return 'New Posts'

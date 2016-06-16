from . import config
from flask import Flask
from flask import render_template
import os

def setup_database():
    if not os.path.isfile('ztzinfo.db'):
        from .dbconn import session
        from .models import Base, User

        Base.metadata.create_all()
        user = User(username=os.environ['MAIL_USERNAME'])
        user.hash_password(os.environ['MAIL_PASSWORD'])
        session.add(user)
        session.commit()


app = Flask(__name__, static_url_path='')

app.config.from_object(config.DevelopmentConfig)

setup_database()

from .blog import blog
from .admin import admin
from .portfolio import portfolio

app.register_blueprint(admin, url_prefix='/admin')
app.register_blueprint(blog, url_prefix='/blog')
app.register_blueprint(portfolio, url_prefix='')

@app.errorhandler(404)
def page_not_found(error):
    return render_template('error.html', erro=error), 404

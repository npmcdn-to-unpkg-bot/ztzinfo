from . import config
from flask import Flask


app = Flask(__name__, static_url_path='')

app.config.from_object(config.DevelopmentConfig)

from .blog import blog
from .admin import admin_app

app.register_blueprint(blog, url_prefix='')
app.register_blueprint(admin_app, url_prefix='/admin')

from . import config
from flask import Flask
from flask import render_template


app = Flask(__name__, static_url_path='')

app.config.from_object(config.DevelopmentConfig)

from .blog import blog
from .admin import admin
from .portfolio import portfolio

app.register_blueprint(admin, url_prefix='/admin')
app.register_blueprint(blog, url_prefix='/blog')
app.register_blueprint(portfolio, url_prefix='')

@app.errorhandler(404)
def page_not_found(error):
    return render_template('error.html', erro=error), 404

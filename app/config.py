import os


class BaseConfig:
    DEBUG = False
    SECRET_KEY = os.urandom(24)
    BASE_DIR = os.path.abspath(os.path.dirname(__file__))
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(BASE_DIR, 'ztzinfo.db')
    SQLALCHEMY_MIGRATE_REPO = os.path.join(BASE_DIR, 'db_repository')
    MAIL_SERVER = 'smtp.gmail.com'
    MAIL_PORT = 465
    MAIL_USE_SSL = True
    MAIL_USE_TSL = False
    MAIL_USERNAME = 'ztzservermail@gmail.com'
    MAIL_PASSWORD = '@#gossip#@'
    #MAIL_USERNAME = os.environ['APP_MAIL_USERNAME']
    #MAIL_PASSWORD = os.environ['APP_MAIL_PASSWORD']
    #SERVER_NAME = 'andre.herokuapp.com'


class DevelopmentConfig(BaseConfig):
    DEBUG = True
    HOST = '0.0.0.0'
    PORT = 5000


class ProductionConfig(BaseConfig):
    DEBUG = False

from app import app

from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

from .models import Base

uri = app.config['SQLALCHEMY_DATABASE_URI']
# uri = 'sqlite:///ztzinfo.db'

engine = create_engine(uri)

Base.metadata.bind = engine
DBSession = sessionmaker(bind=engine)
session = DBSession()

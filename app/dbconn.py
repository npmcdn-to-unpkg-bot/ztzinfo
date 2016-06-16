from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

from .models import Base

engine = create_engine('sqlite:///ztzinfo.db')

Base.metadata.bind = engine
DBSession = sessionmaker(bind=engine)
session = DBSession()
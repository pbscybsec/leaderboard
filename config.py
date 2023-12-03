import os
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

class Config:
    MONGO_URI = os.getenv('MONGO_URI')

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Incident
from api.utils import generate_sitemap, APIException

#import os
#from flask import Flask, request, jsonify, url_for
#from flask_migrate import Migrate
#from flask_swagger import swagger
#from flask_cors import CORS
#from utils import APIException, generate_sitemap
#from admin import setup_admin
#from models import db, Incident

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the GUARDIAN backend"
    }

    return jsonify(response_body), 200
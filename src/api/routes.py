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
    print("Este endpoint funca piola")
    response_body = {
        "message": "Hello! I'm a message that came from the GUARDIAN backend"
    }

    return jsonify(response_body), 200

@api.route('/incidents', methods=['GET'])
def get_all():
    query = Incident.query.all()
    all_incidents = list(map(lambda x: x.serialize(), query))
    return jsonify(all_incidents), 200


@api.route('/incidents', methods=['POST'])
def post_incident():
    body = request.get_json()

    if body is None:
        raise APIException("You need to specify the request body as a json object", status_code=400)
    if 'reported_by' not in body:
        raise APIException('You need to write some name', status_code=400)
    if 'category' not in body:
        raise APIException('You need to specify some category', status_code=400)     
    if 'longitude' not in body:
        raise APIException('You need to specify the longitude of the incident', status_code=400)
    if 'latitude' not in body:
        raise APIException('You need to specify the longitude of the incident', status_code=400)
        
    new_incident = Incident(reported_by=body['reported_by'],category=body['category'],description=body['description'],longitude=body['longitude'],latitude=body['latitude'],)
    db.session.add(new_incident)
    db.session.commit()
    return "New incident recorded in the database.", 200

@api.route('/incidents/<int:incident_id>', methods=['DELETE'])
def delete_incident(incident_id):
    incident = Incident.query.get(incident_id)
    if incident is None:
        raise APIException('Incident not found', status_code=404)
    db.session.delete(incident)
    db.session.commit()
    return "Incident deleted from database", 200

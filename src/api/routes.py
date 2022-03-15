from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Incident
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
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
    reported_by, category, latitude, longitude, description, address = request.json.get('reported_by', None), request.json.get('category', None), request.json.get('latitude', None), request.json.get('longitude', None), request.json.get('description', None), request.json.get('address', None)

    if not (reported_by and category and latitude and longitude and address):
        return jsonify({'message': 'Data nor provided'}), 400
        
    new_incident = Incident(reported_by=reported_by,category=category,description=description,longitude=longitude,latitude=latitude,address=address)
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

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Incident, User
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
    body = request.get_json()

    #comprobar que esta todo lo que necesito
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
        
    #en mi caso sera User(datos de la tabla modelo)
    new_incident = Incident(reported_by=body['reported_by'],category=body['category'],description=body['description'],longitude=body['longitude'],latitude=body['latitude'],)
    db.session.add(new_incident)
    db.session.commit()
    return "New incident recorded in the database.", 200 #respuesta de la API

@api.route('/incidents/<int:incident_id>', methods=['DELETE'])
def delete_incident(incident_id):
    incident = Incident.query.get(incident_id)
    if incident is None:
        raise APIException('Incident not found', status_code=404)
    db.session.delete(incident)
    db.session.commit()
    return "Incident deleted from database", 200




@api.route('/user', methods=['GET'])
def get_user():
    query = User.query.all()
    all_user = list(map(lambda x: x.serialize(), query))
    return jsonify(all_user), 200

@api.route('/user', methods=['POST'])
def post_user():
    body = request.get_json()

    #comprobar que esta todo lo que necesito
    if body is None:
        raise APIException("You need to specify the request body as a json object", status_code=400)
    if 'username' not in body:
        raise APIException('You need to write some name', status_code=400)
    if 'email' not in body:
        raise APIException('You need to specify some category', status_code=400)     
    if 'password' not in body:
        raise APIException('You need to specify the password of the user', status_code=400)
    
    #en mi caso sera User(datos de la tabla modelo)
    new_user = User(username=body['username'],email=body['email'],password=body['password'])
    db.session.add(new_user)
    db.session.commit()
    return "New incident recorded in the database.", 200 #respuesta de la API

#@api.route('/user/<int:id>', methods=['DELETE'])
#def delete_user(id):
 #   user = User.query.get(id)
  #  if user is None:
  #      raise APIException('User not found', status_code=404)
  #  db.session.delete(user)
  #  db.session.commit()
  #  return "User was deleted from database", 200
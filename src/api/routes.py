from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Incident, User
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token

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
    return "New incident recorded in the database.", 200 #respuesta de la API

@api.route('/incidents/<int:incident_id>', methods=['DELETE'])
def delete_incident(incident_id):
    incident = Incident.query.get(incident_id)
    if incident is None:
        raise APIException('Incident not found', status_code=404)
    db.session.delete(incident)
    db.session.commit()
    return "Incident deleted from database", 200

# sign up
@api.route('/onboarding', methods=["POST"])
def onboarding():
    email, password = request.json.get('email', None), request.json.get('password', None)

    # check data
    if not (email and password):
        return jsonify({"Message": "Data not provided"}), 400

    user = User(email=email, password=generate_password_hash(password))
    try:
        userCreated = user.create()
        token = create_access_token(identity=userCreated.id)
        return jsonify({'token': token}), 201

    except Exception as err:
        print(str(err))
        return jsonify({"Message": "Impossible to create user"}), 500

#login
@api.route('/login', methods=["POST"])
def login():
    email, password = request.json.get('email', None), request.json.get('password', None)

    # check data
    if not (email and password):
        return jsonify({"Message": "Data not provided"}), 400

    # get user
    user = User.query.filter_by(email=email).one_or_none()
    if not user:
        return jsonify({"Message": "User doesn't exist"}), 400

    # check password
    if not check_password_hash(user.password, password):
        return jsonify({"Message": "Password doesn't match"}), 500

    # get JWT TOKEN
    token = create_access_token(identity=user.id)
    return jsonify({'token': token}), 200


#SIGNUP
@api.route('/user', methods=['GET'])
def get_user():
    query = User.query.all()
    all_user = list(map(lambda x: x.serialize(), query))
    return jsonify(all_user), 200
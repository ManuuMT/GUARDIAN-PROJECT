from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Incident(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    reported_by = db.Column(db.String(80), unique=False, nullable=False)
    category = db.Column(db.String(120), unique=False, nullable=False)
    description = db.Column(db.String(120), unique=False, nullable=True)
    longitude = db.Column(db.String(120), unique=False, nullable=False)
    latitude = db.Column(db.String(120), unique=False, nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)

    def __repr__(self):
         return f"{self.category}"

    def serialize(self):
        return {
            "id": self.id,
            "reported_by": self.reported_by,
            "category": self.category,
            "description": self.description,
            "longitude": self.longitude,
            "latitude": self.latitude,
            "address": self.address
        }
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Incident(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    reported_by = db.Column(db.String(80), unique=False, nullable=False)
    category = db.Column(db.String(120), unique=False, nullable=False)
    description = db.Column(db.String(120), unique=False, nullable=True)

    def __repr__(self):
         return f"{self.category}"

    def serialize(self):
        return {
            "id": self.id,
            "reported_by": self.reported_by,
            "category": self.category,
            "description": self.description
        }
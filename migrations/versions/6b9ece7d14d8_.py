"""empty message

Revision ID: 6b9ece7d14d8
Revises: 737c6daadfd6
Create Date: 2022-02-21 20:07:52.268084

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6b9ece7d14d8'
down_revision = '737c6daadfd6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('incident', sa.Column('latitude', sa.String(length=120), nullable=False))
    op.add_column('incident', sa.Column('longitude', sa.String(length=120), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('incident', 'longitude')
    op.drop_column('incident', 'latitude')
    # ### end Alembic commands ###
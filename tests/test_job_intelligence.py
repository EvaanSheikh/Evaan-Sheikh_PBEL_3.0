from config import SKILLS_FILE
from utils.job_intelligence import JobIntelligence

job_description = """
Python Backend Developer

We are looking for a Python Backend Developer.

Requirements:

- Python
- Flask
- PostgreSQL
- REST API
- Docker
- Git

Minimum 2 years of experience.
"""

engine = JobIntelligence(SKILLS_FILE)

job = engine.analyze(job_description)

print(job)
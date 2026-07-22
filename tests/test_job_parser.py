from utils.job_parser import JobParser

job = """
We are hiring a Python Backend Developer.

Requirements

Python

FastAPI

Docker

Git

AWS

SQL
"""

parser = JobParser("data/skills.csv")

result = parser.parse(job)

print(result)
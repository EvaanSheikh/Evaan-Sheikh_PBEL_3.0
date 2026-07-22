from utils.similarity import SimilarityEngine

resume = """
Python
Machine Learning
SQL
FastAPI
Docker
"""

job = """
Looking for a Python developer with SQL,
Docker and backend API experience.
"""

engine = SimilarityEngine()

score = engine.calculate_similarity(resume, job)

print(f"Match Score: {score}%")
from services.evaluation_pipeline import EvaluationPipeline

pipeline = EvaluationPipeline("data/skills.csv")

job_description = """
Looking for a Backend Python Developer.

Requirements

Python

FastAPI

Docker

AWS

SQL

Git

REST APIs
"""

result = pipeline.evaluate(
    "resumes/sample_resume.pdf",
    job_description
)

print("=" * 60)
print("Candidate Information")
print("=" * 60)

print(result["candidate"])

print()

print("Semantic Score :", result["semantic_score"])
print("Skill Match    :", result["skill_match"])
print("Final Score    :", result["final_score"])

print()

print("Matching Skills")
print(result["matching_skills"])

print()

print("Missing Skills")
print(result["missing_skills"])
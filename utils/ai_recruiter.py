import json

from services.gemini_service import GeminiService


class AIRecruiter:

    @staticmethod
    def generate(result):

        candidate = result["candidate"]

        prompt = f"""
You are an expert technical recruiter.

Candidate Skills:
{", ".join(candidate.skills)}

Matched Skills:
{", ".join(result["matching_skills"])}

Missing Skills:
{", ".join(result["missing_skills"])}

Resume Quality Score:
{candidate.resume_quality["quality_score"]}

Semantic Similarity:
{result["semantic_score"]}

ATS Score:
{result["final_score"]}

Return ONLY valid JSON.

Format:

{{
    "summary":"",
    "strengths":[],
    "weaknesses":[],
    "interview_questions":[],
    "resume_improvements":[]
}}
"""

        try:

            response = GeminiService.generate_json(prompt)

            return response

        except Exception as e:

            return {

                "summary": f"Gemini Error: {e}",

                "strengths": [],

                "weaknesses": [],

                "interview_questions": [],

                "resume_improvements": []

            }
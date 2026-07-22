import re

from models.job import Job
from utils.job_parser import JobParser
from utils.skill_normalizer import SkillNormalizer


class JobIntelligence:

    def __init__(self, skills_file):
        self.job_parser = JobParser(skills_file)

    def analyze(self, job_description: str):

        parsed = self.job_parser.parse(job_description)

        job = Job()

        # --------------------------
        # Normalize Skills
        # --------------------------

        extracted = [
            skill["skill"]
            for skill in parsed["skills"]
        ]

        normalized = SkillNormalizer.normalize(extracted)

        job.required_skills = normalized

        # --------------------------
        # Detect Experience
        # --------------------------

        experience_patterns = [
            r"(\d+)\+?\s*years?",
            r"minimum\s+(\d+)\s*years?",
            r"at\s+least\s+(\d+)\s*years?"
        ]

        for pattern in experience_patterns:

            match = re.search(
                pattern,
                job_description,
                re.IGNORECASE
            )

            if match:
                job.minimum_experience = int(match.group(1))
                break

        # --------------------------
        # Detect Job Title
        # --------------------------

        lines = [
            line.strip()
            for line in job_description.splitlines()
            if line.strip()
        ]

        if lines:
            job.title = lines[0]

        return job
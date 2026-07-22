from utils.preprocess import TextPreprocessor
from utils.skill_extractor import SkillExtractor


class JobParser:

    def __init__(self, skills_file):

        self.extractor = SkillExtractor(skills_file)

    def parse(self, job_description):

        clean = TextPreprocessor.clean_text(job_description)

        skills = self.extractor.extract_skills(clean)

        return {
            "clean_text": clean,
            "skills": skills
        }
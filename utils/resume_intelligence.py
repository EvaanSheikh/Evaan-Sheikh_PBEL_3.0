from models.candidate import Candidate
from utils.resume_parser import ResumeParser
from utils.skill_extractor import SkillExtractor
from utils.skill_normalizer import SkillNormalizer
from utils.resume_quality import ResumeQualityAnalyzer
from config import SKILLS_FILE
class ResumeIntelligence:

    def __init__(self):

        self.skill_extractor = SkillExtractor(SKILLS_FILE)

    def analyze(self, resume_text):

        candidate = Candidate()

        # Contact Information
        candidate.name = ResumeParser.extract_name(resume_text)
        candidate.email = ResumeParser.extract_email(resume_text)
        candidate.phone = ResumeParser.extract_phone(resume_text)

        # Skills
        extracted_skills = self.skill_extractor.extract_skills(resume_text)

        skills = []

        for item in extracted_skills:
            if isinstance(item, dict):
                skills.append(item["skill"])
            else:
                skills.append(item[0])

        candidate.skills = SkillNormalizer.normalize(skills)

        # Resume Quality
        candidate.resume_quality = ResumeQualityAnalyzer.analyze(
            resume_text,
            candidate
        )

        return candidate
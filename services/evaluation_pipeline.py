from utils.pdf_parser import PDFParser
from utils.preprocess import TextPreprocessor
from utils.resume_intelligence import ResumeIntelligence
from utils.job_intelligence import JobIntelligence
from utils.similarity import SimilarityEngine
from utils.scorer import CandidateScorer
from utils.skill_matcher import SkillMatcher


class EvaluationPipeline:

    def __init__(self, skills_file):

        self.resume_engine = ResumeIntelligence()
        self.job_engine = JobIntelligence(skills_file)

        self.similarity_engine = SimilarityEngine()
        self.scorer = CandidateScorer()

    def evaluate(self, resume_pdf, job_description):

        # ---------------------------------
        # Resume Processing
        # ---------------------------------

        raw_resume = PDFParser.extract_text(resume_pdf)

        clean_resume = TextPreprocessor.clean_text(raw_resume)

        candidate = self.resume_engine.analyze(raw_resume)

        # ---------------------------------
        # Job Processing
        # ---------------------------------

        job = self.job_engine.analyze(job_description)

        clean_job = TextPreprocessor.clean_text(job_description)

        # ---------------------------------
        # Semantic Similarity
        # ---------------------------------

        semantic_score = self.similarity_engine.calculate_similarity(
            clean_resume,
            clean_job
        )

        # ---------------------------------
        # Smart Skill Matching
        # ---------------------------------

        skill_result = SkillMatcher.match(
            candidate.skills,
            job.required_skills
        )

        skill_match = skill_result["score"]

        matching_skills = skill_result["matched"]

        missing_skills = skill_result["missing"]

        # ---------------------------------
        # Final Score
        # ---------------------------------

        final_score = self.scorer.calculate_score(
            semantic_score=semantic_score,
            skill_match=skill_match
        )

        return {

            "candidate": candidate,

            "job": job,

            "semantic_score": round(
                semantic_score,
                2
            ),

            "skill_match": round(
                skill_match,
                2
            ),

            "resume_quality": candidate.resume_quality,

            "final_score": final_score,

            "matching_skills": matching_skills,

            "missing_skills": missing_skills

        }
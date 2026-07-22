from models.evaluation import Evaluation


class EvaluationEngine:

    @staticmethod
    def evaluate(candidate, job, semantic_score, skill_match):

        evaluation = Evaluation()

        evaluation.semantic_similarity = semantic_score
        evaluation.skill_match = skill_match
        evaluation.resume_quality = candidate.resume_quality["quality_score"]

        # Weighted scoring
        evaluation.overall_score = round(
            semantic_score * 0.45
            + skill_match * 0.35
            + candidate.resume_quality["quality_score"] * 0.20,
            2,
        )

        candidate_skills = set(candidate.skills)
        required_skills = set(job.required_skills)

        evaluation.matched_skills = sorted(candidate_skills & required_skills)
        evaluation.missing_skills = sorted(required_skills - candidate_skills)

        if evaluation.resume_quality >= 90:
            evaluation.strengths.append("Well-structured resume")

        if evaluation.skill_match >= 80:
            evaluation.strengths.append("Strong skill match")

        if evaluation.semantic_similarity >= 80:
            evaluation.strengths.append("Highly relevant profile")

        if evaluation.missing_skills:
            evaluation.weaknesses.append(
                f"Missing {len(evaluation.missing_skills)} required skill(s)"
            )

        if evaluation.overall_score >= 85:
            evaluation.recommendation = "Highly Recommended"
        elif evaluation.overall_score >= 70:
            evaluation.recommendation = "Recommended"
        elif evaluation.overall_score >= 50:
            evaluation.recommendation = "Consider"
        else:
            evaluation.recommendation = "Not Recommended"

        evaluation.score_breakdown = {
            "Semantic Similarity": evaluation.semantic_similarity,
            "Skill Match": evaluation.skill_match,
            "Resume Quality": evaluation.resume_quality,
            "Overall Score": evaluation.overall_score,
        }

        return evaluation
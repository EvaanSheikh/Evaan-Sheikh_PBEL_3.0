class EvaluationReport:

    @staticmethod
    def generate(result):

        quality = result["resume_quality"]

        strengths = []
        weaknesses = []

        if quality["quality_score"] >= 90:
            strengths.append("Excellent resume quality")

        if result["semantic_score"] >= 80:
            strengths.append("High semantic similarity")

        if result["skill_match"] >= 70:
            strengths.append("Strong skill match")

        if quality["has_github"]:
            strengths.append("GitHub profile available")

        if quality["has_linkedin"]:
            strengths.append("LinkedIn profile available")

        if result["missing_skills"]:
            for skill in result["missing_skills"]:
                weaknesses.append(f"Missing {skill}")

        if result["final_score"] >= 85:
            recommendation = "Highly Recommended"

        elif result["final_score"] >= 70:
            recommendation = "Recommended"

        elif result["final_score"] >= 50:
            recommendation = "Consider"

        else:
            recommendation = "Not Recommended"

        return {

            "strengths": strengths,

            "weaknesses": weaknesses,

            "recommendation": recommendation
        }
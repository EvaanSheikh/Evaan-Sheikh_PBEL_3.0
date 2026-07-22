import re


class ResumeQualityAnalyzer:
    """
    Analyze resume quality and provide an ATS-style quality score.
    """

    @staticmethod
    def analyze(resume_text: str, candidate):

        quality = {}

        quality["has_email"] = candidate.email is not None
        quality["has_phone"] = candidate.phone is not None

        quality["has_github"] = bool(
            re.search(r"github\.com", resume_text, re.IGNORECASE)
        )

        quality["has_linkedin"] = bool(
            re.search(r"linkedin\.com", resume_text, re.IGNORECASE)
        )

        word_count = len(resume_text.split())
        quality["word_count"] = word_count

        # -----------------------------
        # Resume Length
        # -----------------------------
        if word_count < 250:
            quality["resume_length"] = "Too Short"
        elif word_count < 450:
            quality["resume_length"] = "Good"
        elif word_count < 800:
            quality["resume_length"] = "Excellent"
        else:
            quality["resume_length"] = "Too Long"

        text = resume_text.lower()

        quality["has_projects"] = "project" in text
        quality["has_education"] = (
            "education" in text
            or "b.tech" in text
            or "bachelor" in text
            or "university" in text
        )

        quality["has_experience"] = (
            "experience" in text
            or "internship" in text
            or "worked" in text
        )

        quality["has_certifications"] = (
            "certification" in text
            or "certificate" in text
            or "certified" in text
        )

        # -----------------------------
        # ATS Quality Score
        # -----------------------------
        score = 0

        if quality["has_email"]:
            score += 10

        if quality["has_phone"]:
            score += 10

        if quality["has_linkedin"]:
            score += 10

        if quality["has_github"]:
            score += 10

        if quality["has_projects"]:
            score += 15

        if quality["has_education"]:
            score += 15

        if quality["has_experience"]:
            score += 15

        if quality["has_certifications"]:
            score += 10

        if quality["resume_length"] == "Excellent":
            score += 5

        quality["quality_score"] = score

        recommendations = []

        if not quality["has_github"]:
            recommendations.append("Add a GitHub profile.")

        if not quality["has_linkedin"]:
            recommendations.append("Add a LinkedIn profile.")

        if not quality["has_projects"]:
            recommendations.append("Include a Projects section.")

        if not quality["has_certifications"]:
            recommendations.append("Mention relevant certifications.")

        if quality["resume_length"] == "Too Short":
            recommendations.append("Resume is too short.")

        if quality["resume_length"] == "Too Long":
            recommendations.append("Resume is too long.")

        if not recommendations:
            recommendations.append("Resume quality is excellent.")

        quality["recommendations"] = recommendations

        return quality
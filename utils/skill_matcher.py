class SkillMatcher:
    """
    Smart skill matching using exact + related skills.
    """

    RELATED = {

        "Machine Learning": {
            "TensorFlow",
            "PyTorch",
            "Scikit-learn",
            "XGBoost",
            "LightGBM"
        },

        "Deep Learning": {
            "TensorFlow",
            "PyTorch",
            "CNN",
            "RNN",
            "LSTM",
            "Transformer"
        },

        "Artificial Intelligence": {
            "Machine Learning",
            "Deep Learning",
            "Computer Vision",
            "NLP",
            "Generative AI"
        },

        "Backend": {
            "FastAPI",
            "Django",
            "Flask",
            "Spring Boot",
            "Express.js"
        },

        "Frontend": {
            "React",
            "Next.js",
            "Angular",
            "Vue.js"
        },

        "Cloud": {
            "Amazon Web Services",
            "Microsoft Azure",
            "Google Cloud Platform"
        }

    }

    @classmethod
    def match(cls, resume_skills, job_skills):

        resume = {s.lower(): s for s in resume_skills}

        matched = []
        missing = []

        score = 0

        for job_skill in job_skills:

            lower = job_skill.lower()

            # Exact Match
            if lower in resume:

                matched.append(job_skill)
                score += 1

                continue

            # Related Match

            related = cls.RELATED.get(job_skill, set())

            found = False

            for skill in related:

                if skill.lower() in resume:

                    matched.append(f"{job_skill} ({skill})")

                    score += 0.8

                    found = True

                    break

            if not found:
                missing.append(job_skill)

        percentage = 0

        if job_skills:

            percentage = round(
                (score / len(job_skills)) * 100,
                2
            )

        return {

            "score": percentage,

            "matched": matched,

            "missing": missing

        }
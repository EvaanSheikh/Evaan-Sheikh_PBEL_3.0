class SkillNormalizer:
    """
    Normalizes skills into canonical names.
    Handles aliases and duplicate removal.
    """

    ALIASES = {

        # -----------------------------
        # Languages
        # -----------------------------

        "py": "Python",
        "python3": "Python",

        "js": "JavaScript",
        "node": "Node.js",
        "ts": "TypeScript",

        "c sharp": "C#",
        "csharp": "C#",

        # -----------------------------
        # AI
        # -----------------------------

        "ai": "Artificial Intelligence",
        "ml": "Machine Learning",
        "dl": "Deep Learning",

        "llm": "Large Language Models",
        "llms": "Large Language Models",

        "gen ai": "Generative AI",
        "genai": "Generative AI",

        # -----------------------------
        # Cloud
        # -----------------------------

        "gcp": "Google Cloud Platform",
        "google cloud": "Google Cloud Platform",

        "aws cloud": "Amazon Web Services",
        "azure cloud": "Microsoft Azure",

        # -----------------------------
        # Databases
        # -----------------------------

        "postgres": "PostgreSQL",
        "mongo": "MongoDB",

        # -----------------------------
        # Containers
        # -----------------------------

        "k8s": "Kubernetes",

        # -----------------------------
        # APIs
        # -----------------------------

        "rest": "REST API",
        "restful api": "REST API",

    }

    INVALID = {

        "developer",
        "software engineer",
        "engineer",
        "programmer",
        "student",
        "intern"

    }

    @classmethod
    def normalize(cls, skills):

        normalized = []
        seen = set()

        for skill in skills:

            key = skill.strip().lower()

            if key in cls.INVALID:
                continue

            canonical = cls.ALIASES.get(key, skill)

            if canonical.lower() not in seen:

                seen.add(canonical.lower())
                normalized.append(canonical)

        return sorted(normalized)
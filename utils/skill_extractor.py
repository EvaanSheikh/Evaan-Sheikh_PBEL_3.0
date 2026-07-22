import re
import pandas as pd


class SkillExtractor:
    """
    Extract technical skills from resume text.
    Supports optional aliases and multiple CSV formats.
    """

    def __init__(self, skills_file: str):

        self.skills_df = pd.read_csv(skills_file)

        # Normalize column names
        self.skills_df.columns = [
            col.strip().lower()
            for col in self.skills_df.columns
        ]

        required = {"skill", "category"}

        if not required.issubset(self.skills_df.columns):
            raise ValueError(
                "skills.csv must contain 'Skill' and 'Category' columns."
            )

    def extract_skills(self, text: str):

        text = text.lower()

        detected = []
        seen = set()

        for row in self.skills_df.to_dict("records"):

            skill = str(row["skill"]).strip()
            category = str(row["category"]).strip()

            keywords = [skill]

            # Optional aliases column
            if "aliases" in row and pd.notna(row["aliases"]):

                aliases = [
                    alias.strip()
                    for alias in str(row["aliases"]).split(";")
                    if alias.strip()
                ]

                keywords.extend(aliases)

            matched = False

            for keyword in keywords:

                pattern = rf"\b{re.escape(keyword.lower())}\b"

                if re.search(pattern, text):
                    matched = True
                    break

            if matched:

                key = skill.lower()

                if key not in seen:

                    seen.add(key)

                    detected.append(
                        {
                            "skill": skill,
                            "category": category
                        }
                    )

        return detected
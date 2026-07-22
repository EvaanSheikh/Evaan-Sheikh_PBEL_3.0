"""
Project Configuration
"""

# ==========================
# AI Model
# ==========================

MODEL_NAME = "all-MiniLM-L6-v2"

# ==========================
# File Paths
# ==========================

SKILLS_FILE = "data/skills.csv"

REPORT_FOLDER = "reports/"

# ==========================
# Score Weights
# ==========================

SCORE_WEIGHTS = {
    "semantic": 0.60,
    "skills": 0.25,
    "experience": 0.10,
    "education": 0.05
}

# ==========================
# Recommendation Thresholds
# ==========================

HIGHLY_RECOMMENDED = 80

RECOMMENDED = 60
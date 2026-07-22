from dataclasses import dataclass, field


@dataclass
class Evaluation:
    semantic_similarity: float = 0.0
    skill_match: float = 0.0
    resume_quality: float = 0.0

    overall_score: float = 0.0

    matched_skills: list = field(default_factory=list)
    missing_skills: list = field(default_factory=list)

    strengths: list = field(default_factory=list)
    weaknesses: list = field(default_factory=list)

    recommendation: str = ""

    score_breakdown: dict = field(default_factory=dict)
from dataclasses import dataclass, field

@dataclass
class Job:

    title: str = ""

    required_skills: list = field(default_factory=list)

    preferred_skills: list = field(default_factory=list)

    education: list = field(default_factory=list)

    minimum_experience: int = 0
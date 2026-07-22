from dataclasses import dataclass, field

@dataclass
class Candidate:
    name: str = ""
    email: str = ""
    phone: str = ""

    skills: list = field(default_factory=list)
    education: dict = field(default_factory=dict)
    experience: dict = field(default_factory=dict)
    projects: list = field(default_factory=list)

    resume_quality: dict = field(default_factory=dict)
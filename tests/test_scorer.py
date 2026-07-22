from utils.scorer import CandidateScorer

scorer = CandidateScorer()

score = scorer.calculate_score(
    semantic_score=87,
    skill_match=75,
    experience_score=90,
    education_score=100
)

print("=" * 50)
print("Candidate Score")
print("=" * 50)
print(score)
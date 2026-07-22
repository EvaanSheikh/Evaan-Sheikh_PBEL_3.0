from config import SCORE_WEIGHTS
class CandidateScorer:
    """
    Calculate the final candidate score.
    """

    def __init__(self, weights=None):

        self.weights = SCORE_WEIGHTS

    def calculate_score(
        self,
        semantic_score,
        skill_match,
        experience_score=100,
        education_score=100
    ):

        score = (
            semantic_score * self.weights["semantic"]
            + skill_match * self.weights["skills"]
            + experience_score * self.weights["experience"]
            + education_score * self.weights["education"]
        )

        return round(score, 2)
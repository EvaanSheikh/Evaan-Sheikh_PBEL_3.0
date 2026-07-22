from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

from config import MODEL_NAME


class SimilarityEngine:

    def __init__(self):
        self.model = SentenceTransformer(MODEL_NAME)

    def calculate_similarity(self, resume_text, job_description):

        resume_embedding = self.model.encode([resume_text])

        jd_embedding = self.model.encode([job_description])

        similarity = cosine_similarity(
            resume_embedding,
            jd_embedding
        )[0][0]

        return round(float(similarity * 100), 2)
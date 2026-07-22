import re

# Cleans and normalizes extracted resume text
class TextPreprocessor:
    @staticmethod
    def clean_text(text: str) -> str:
        # Convert to lowercase
        text = text.lower()

        # Replace multiple spaces/newlines with a single space
        text = re.sub(r"\s+", " ", text)

        # Remove unwanted characters
        text = re.sub(r"[^a-zA-Z0-9\s+#.]", "", text)

        return text.strip()
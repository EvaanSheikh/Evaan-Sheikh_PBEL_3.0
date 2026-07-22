import os
import json

from dotenv import load_dotenv
from google import genai

load_dotenv()


class GeminiService:

    _client = None

    @classmethod
    def get_client(cls):

        if cls._client is None:

            api_key = os.getenv("GEMINI_API_KEY")

            print("=" * 60)
            print("GEMINI_API_KEY exists:", api_key is not None)

            if api_key:
                print("Key prefix:", api_key[:12])

            print("GOOGLE_API_KEY:", os.getenv("GOOGLE_API_KEY"))
            print("GOOGLE_GENAI_USE_VERTEXAI:", os.getenv("GOOGLE_GENAI_USE_VERTEXAI"))
            print("GOOGLE_APPLICATION_CREDENTIALS:", os.getenv("GOOGLE_APPLICATION_CREDENTIALS"))
            print("=" * 60)

            if not api_key:
                raise RuntimeError("GEMINI_API_KEY not found in .env")

            cls._client = genai.Client(api_key=api_key)

        return cls._client

    @classmethod
    def generate_json(cls, prompt):

        client = cls.get_client()

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        text = response.text.strip()

        # Remove markdown code fences
        if "```json" in text:
            text = text.split("```json", 1)[1]
            text = text.split("```", 1)[0]
        elif "```" in text:
            text = text.split("```", 1)[1]
            text = text.split("```", 1)[0]

        text = text.strip()

        return json.loads(text)
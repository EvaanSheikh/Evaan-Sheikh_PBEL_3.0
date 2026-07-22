from services.gemini_service import GeminiService

print("Testing Gemini...")

response = GeminiService.generate_json("""
Return ONLY this JSON:

{
  "hello": "world"
}
""")

print(response)
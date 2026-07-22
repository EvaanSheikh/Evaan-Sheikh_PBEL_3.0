from utils.pdf_parser import PDFParser
from utils.preprocess import TextPreprocessor

resume_path = "resumes/sample_resume.pdf"

raw_text = PDFParser.extract_text(resume_path)

clean_text = TextPreprocessor.clean_text(raw_text)

print("=" * 60)
print("RAW TEXT")
print("=" * 60)
print(raw_text[:500])

print("\n" + "=" * 60)
print("CLEANED TEXT")
print("=" * 60)
print(clean_text[:500])
from utils.pdf_parser import PDFParser

resume_path = "resumes/sample_resume.pdf"

text = PDFParser.extract_text(resume_path)

print("=" * 60)
print("First 1000 characters of the resume:\n")
print(text[:1000])
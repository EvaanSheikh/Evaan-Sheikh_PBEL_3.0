from utils.pdf_parser import PDFParser
from utils.resume_parser import ResumeParser

resume = PDFParser.extract_text("resumes/sample_resume.pdf")

print("=" * 60)
print("Resume Information")
print("=" * 60)

print("Name :", ResumeParser.extract_name(resume))
print("Email:", ResumeParser.extract_email(resume))
print("Phone:", ResumeParser.extract_phone(resume))
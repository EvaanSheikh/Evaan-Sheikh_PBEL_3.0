from utils.pdf_parser import PDFParser
from utils.resume_intelligence import ResumeIntelligence

parser = PDFParser()
engine = ResumeIntelligence()

text = parser.extract_text("C:\\Users\\Evaan\\OneDrive\\Desktop\\RSCRT\\resumes\\sample_resume.pdf")  

candidate = engine.analyze(text)

print(candidate)

print("\nResume Quality")
print(candidate.resume_quality)
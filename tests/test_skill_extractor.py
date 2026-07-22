from utils.pdf_parser import PDFParser
from utils.preprocess import TextPreprocessor
from utils.skill_extractor import SkillExtractor

resume_path = "resumes/sample_resume.pdf"

raw_text = PDFParser.extract_text(resume_path)

clean_text = TextPreprocessor.clean_text(raw_text)

extractor = SkillExtractor("data/skills.csv")

skills = extractor.extract_skills(clean_text)

print("=" * 60)
print("Detected Skills")
print("=" * 60)

if skills:
    for item in skills:
        print(f"✓ {item['skill']} ({item['category']})")
else:
    print("No matching skills found.")
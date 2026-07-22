import fitz


class PDFParser:
    @staticmethod
    def extract_text(pdf_path: str) -> str:
        text = ""

        with fitz.open(pdf_path) as document:
            for page in document:
                text += page.get_text()

        return text.strip()
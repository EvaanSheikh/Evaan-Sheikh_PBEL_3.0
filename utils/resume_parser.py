import re


class ResumeParser:
    """
    Extract basic information from resume text.
    """

    @staticmethod
    def extract_email(text: str):
        pattern = r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
        match = re.search(pattern, text)
        return match.group() if match else None

    @staticmethod
    def extract_phone(text: str):
        """
        Extract phone numbers in common formats:
        - 9876543210
        - +91 9876543210
        - +91-9876543210
        - 828-776-7557
        - 828 776 7557
        - (828) 776-7557
        """

        pattern = (
            r"(?:\+91[-\s]?)?"
            r"(?:\(?[6-9]\d{2}\)?[-\s]?\d{3}[-\s]?\d{4}|[6-9]\d{9})"
        )

        match = re.search(pattern, text)

        if not match:
            return None

        phone = re.sub(r"\D", "", match.group())

        if phone.startswith("91") and len(phone) > 10:
            phone = phone[2:]

        return phone

    @staticmethod
    def extract_name(text: str):
        """
        Extract candidate name using simple heuristics.
        """

        lines = [line.strip() for line in text.split("\n") if line.strip()]

        ignore = {
            "resume",
            "curriculum vitae",
            "cv",
            "profile",
            "summary",
            "abstract",
            "domain expertise",
            "professional summary",
            "career objective",
            "job vision",
        }

        for line in lines[:20]:

            if line.lower() in ignore:
                continue

            if "@" in line:
                continue

            if re.search(r"\d{8,}", line):
                continue

            if re.fullmatch(r"[A-Za-z .]+", line):

                words = line.split()

                if 2 <= len(words) <= 4:
                    return line

        return "Not Found"
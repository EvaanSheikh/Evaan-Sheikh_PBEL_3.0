import streamlit as st
import tempfile

from config import SKILLS_FILE
from components.resume_quality import render_resume_quality
from utils.ai_recruiter import AIRecruiter
from utils.evaluation_report import EvaluationReport
from services.evaluation_pipeline import EvaluationPipeline
from components.candidate import render_candidate
from components.skills import render_skills
from components.page import setup_page, render_title
from components.uploader import render_uploader
from components.metrics import render_metrics


setup_page()

render_title()

pipeline = EvaluationPipeline(SKILLS_FILE)

uploaded_resume, job_description, analyze = render_uploader()

if analyze:

    if uploaded_resume is None:
        st.error("Please upload a resume.")
        st.stop()

    if not job_description.strip():
        st.error("Please enter a job description.")
        st.stop()

    with tempfile.NamedTemporaryFile(
        delete=False,
        suffix=".pdf"
    ) as temp_file:

        temp_file.write(uploaded_resume.read())
        resume_path = temp_file.name

    result = pipeline.evaluate(
        resume_path,
        job_description
    )

    candidate = result["candidate"]
    quality = result["resume_quality"]
    report = EvaluationReport.generate(result)
    with st.spinner("🤖 AI Recruiter is analyzing the candidate..."):
        ai = AIRecruiter.generate(result)

    st.success("Resume evaluated successfully!")

    st.divider()

    # -----------------------------
    # Metrics
    # ----------------------------- 

    render_metrics(result)

    render_candidate(candidate, quality)
   
    render_skills(result, candidate)

   
    # -----------------------------
    # Resume Quality
    # -----------------------------
    render_resume_quality(quality)

    st.subheader("💡 Recommendations")

    for recommendation in quality["recommendations"]:
        st.success(recommendation)
        st.divider()

    st.subheader("💪 Strengths")

    for item in report["strengths"]:
        st.success(item)

    st.divider()

    st.subheader("⚠ Weaknesses")

    if report["weaknesses"]:
        for item in report["weaknesses"]:
            st.warning(item)
    else:
        st.success("No major weaknesses detected.")

    st.divider()

    st.subheader("🎯 Hiring Recommendation")

    recommendation = report["recommendation"]

    if recommendation == "Highly Recommended":
        st.success(recommendation)

    elif recommendation == "Recommended":
        st.info(recommendation)

    elif recommendation == "Consider":
        st.warning(recommendation)

    else:
        st.error(recommendation)
        st.divider()

        st.header("🤖 AI Recruiter Assistant")

        st.subheader("Candidate Summary")
        st.info(ai["summary"])

        st.subheader("💪 AI Strengths")

        for item in ai["strengths"]:
            st.success(item)

        st.subheader("⚠ AI Weaknesses")

        for item in ai["weaknesses"]:
            st.warning(item)

        st.subheader("❓ Suggested Interview Questions")

        for i, question in enumerate(ai["interview_questions"], start=1):
            st.write(f"{i}. {question}")

        st.subheader("📈 Resume Improvement Suggestions")

        for suggestion in ai["resume_improvements"]:
            st.write(f"• {suggestion}")
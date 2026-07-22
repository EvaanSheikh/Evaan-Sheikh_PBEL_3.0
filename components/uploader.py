import streamlit as st


def render_uploader():

    uploaded_resume = st.file_uploader(
        "Upload Resume (PDF)",
        type=["pdf"]
    )

    job_description = st.text_area(
        "Job Description",
        height=250,
        placeholder="Paste the complete job description..."
    )

    analyze = st.button(
        "🚀 Analyze Candidate",
        use_container_width=True
    )

    return uploaded_resume, job_description, analyze
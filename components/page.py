import streamlit as st


def setup_page():

    st.set_page_config(
        page_title="HireSense AI",
        page_icon="📄",
        layout="wide",
        initial_sidebar_state="expanded"
    )


def render_title():

    st.title("📄 HireSense AI")

    st.caption(
        "AI-Powered Resume Screening & Candidate Intelligence Platform"
    )

    st.divider()
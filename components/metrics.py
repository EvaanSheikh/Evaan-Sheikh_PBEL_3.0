import streamlit as st


def render_metrics(result):

    c1, c2, c3 = st.columns(3)

    with c1:
        st.metric(
            "Overall ATS Score",
            f'{result["final_score"]}%'
        )
        st.progress(result["final_score"] / 100)

    with c2:
        st.metric(
            "Semantic Similarity",
            f'{result["semantic_score"]}%'
        )
        st.progress(result["semantic_score"] / 100)

    with c3:
        st.metric(
            "Skill Match",
            f'{result["skill_match"]:.2f}%'
        )
        st.progress(result["skill_match"] / 100)
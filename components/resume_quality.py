import streamlit as st


def render_resume_quality(quality):

    st.subheader("📄 Resume Quality")

    left, right = st.columns(2)

    with left:
        st.metric("Quality Score", f'{quality["quality_score"]}/100')
        st.metric("Resume Length", quality["resume_length"])
        st.metric("Word Count", quality["word_count"])

    with right:

        st.write("### Checklist")

        st.checkbox(
            "Email Found",
            value=quality["has_email"],
            disabled=True
        )

        st.checkbox(
            "Phone Found",
            value=quality["has_phone"],
            disabled=True
        )

        st.checkbox(
            "GitHub Found",
            value=quality["has_github"],
            disabled=True
        )

        st.checkbox(
            "LinkedIn Found",
            value=quality["has_linkedin"],
            disabled=True
        )

        st.checkbox(
            "Projects",
            value=quality["has_projects"],
            disabled=True
        )

        st.checkbox(
            "Education",
            value=quality["has_education"],
            disabled=True
        )

        st.checkbox(
            "Experience",
            value=quality["has_experience"],
            disabled=True
        )

        st.checkbox(
            "Certifications",
            value=quality["has_certifications"],
            disabled=True
        )

    st.divider()

    st.subheader("💡 Recommendations")

    for recommendation in quality["recommendations"]:
        st.success(recommendation)

    st.divider()
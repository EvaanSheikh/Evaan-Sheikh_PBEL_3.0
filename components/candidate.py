import streamlit as st


def render_candidate(candidate, quality):
    """
    Displays candidate information.
    """

    st.subheader("👤 Candidate Information")

    left, right = st.columns(2)

    with left:
        st.write(f"**Name:** {candidate.name}")
        st.write(f"**Email:** {candidate.email}")
        st.write(f"**Phone:** {candidate.phone}")

    with right:
        st.write(f"**Skills Found:** {len(candidate.skills)}")
        st.write(f"**Resume Length:** {quality['resume_length']}")
        st.write(
            f"**Resume Quality Score:** {quality['quality_score']}/100"
        )

    st.divider()
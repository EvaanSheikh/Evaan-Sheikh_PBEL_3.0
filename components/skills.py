import streamlit as st


def render_skills(result, candidate):

    st.subheader("🛠 Skills Analysis")

    left, right = st.columns(2)

    with left:

        st.subheader("✅ Matched Skills")

        if result["matching_skills"]:
            for skill in result["matching_skills"]:
                st.success(skill)
        else:
            st.info("No matched skills.")

    with right:

        st.subheader("❌ Missing Skills")

        if result["missing_skills"]:
            for skill in result["missing_skills"]:
                st.error(skill)
        else:
            st.success("No missing skills.")

    st.divider()

    st.subheader("🧰 Candidate Skills")

    cols = st.columns(4)

    for i, skill in enumerate(candidate.skills):
        cols[i % 4].success(skill)

    st.divider()
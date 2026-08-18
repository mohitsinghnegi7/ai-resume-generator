import React from "react";
import {
  FaFileAlt,
  FaRobot,
  FaChartLine,
  FaSearch,
  FaMagic,
  FaCheckCircle,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-base-200">

    
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <FaMagic />
            AI-Powered Resume Builder
          </div>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Build a Resume That
            <span className="text-primary"> Gets Noticed</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-base-content/60 md:text-lg">
            Our AI-powered resume platform helps job seekers create
            professional, ATS-friendly resumes and analyze them against
            real job descriptions to improve their chances of getting
            shortlisted.
          </p>

        </div>
      </section>

      {/* =====================================================
          ABOUT PLATFORM
      ===================================================== */}

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

          <div className="rounded-2xl bg-base-100 p-8 shadow-xl">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <FaFileAlt className="text-xl text-primary" />
            </div>

            <h2 className="text-2xl font-bold">
              What We Do
            </h2>

            <p className="mt-4 leading-7 text-base-content/60">
              Creating a good resume can be challenging, especially
              when you need to tailor it for different job roles.
              Our platform simplifies this process by combining
              resume generation with AI-powered analysis.
            </p>

            <p className="mt-4 leading-7 text-base-content/60">
              From generating professional resume content to
              analyzing your resume against a specific job
              description, the platform helps you make your resume
              more relevant, structured, and ATS-friendly.
            </p>

          </div>

          <div className="rounded-2xl bg-base-100 p-8 shadow-xl">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <FaRobot className="text-xl text-primary" />
            </div>

            <h2 className="text-2xl font-bold">
              Powered by AI
            </h2>

            <p className="mt-4 leading-7 text-base-content/60">
              AI helps transform your career information into
              professional resume content while maintaining a
              structured format suitable for modern hiring systems.
            </p>

            <p className="mt-4 leading-7 text-base-content/60">
              Our ATS analyzer can compare your resume with a job
              description, identify matching and missing keywords,
              calculate an ATS score, and provide optimization
              suggestions.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="bg-base-100 px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center">

            <h2 className="text-3xl font-bold">
              Everything You Need
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-base-content/60">
              Tools designed to help you create, analyze, and
              improve your resume.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* Resume Builder */}
            <div className="rounded-2xl border border-base-300 p-6 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <FaFileAlt className="text-xl text-primary" />
              </div>

              <h3 className="text-xl font-semibold">
                AI Resume Builder
              </h3>

              <p className="mt-3 text-sm leading-6 text-base-content/60">
                Generate structured and professional resume content
                using AI based on your career information.
              </p>

            </div>

            {/* ATS Analyzer */}
            <div className="rounded-2xl border border-base-300 p-6 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <FaSearch className="text-xl text-primary" />
              </div>

              <h3 className="text-xl font-semibold">
                ATS Analyzer
              </h3>

              <p className="mt-3 text-sm leading-6 text-base-content/60">
                Compare your resume with a job description and
                discover how well it matches the role.
              </p>

            </div>

            {/* Optimization */}
            <div className="rounded-2xl border border-base-300 p-6 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <FaChartLine className="text-xl text-primary" />
              </div>

              <h3 className="text-xl font-semibold">
                AI Optimization
              </h3>

              <p className="mt-3 text-sm leading-6 text-base-content/60">
                Get AI-driven suggestions to improve your resume
                based on the target job description.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section className="px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center">

            <h2 className="text-3xl font-bold">
              How It Works
            </h2>

            <p className="mt-3 text-base-content/60">
              Create and improve your resume in a few simple steps.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* Step 1 */}
            <div className="rounded-2xl bg-base-100 p-7 text-center shadow-lg">

              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-primary-content">
                1
              </div>

              <h3 className="text-lg font-semibold">
                Enter Your Details
              </h3>

              <p className="mt-3 text-sm leading-6 text-base-content/60">
                Provide your education, skills, experience,
                projects, certifications, and other career details.
              </p>

            </div>

            {/* Step 2 */}
            <div className="rounded-2xl bg-base-100 p-7 text-center shadow-lg">

              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-primary-content">
                2
              </div>

              <h3 className="text-lg font-semibold">
                Generate Your Resume
              </h3>

              <p className="mt-3 text-sm leading-6 text-base-content/60">
                AI transforms your information into professional,
                structured resume content.
              </p>

            </div>

            {/* Step 3 */}
            <div className="rounded-2xl bg-base-100 p-7 text-center shadow-lg">

              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-primary-content">
                3
              </div>

              <h3 className="text-lg font-semibold">
                Analyze & Improve
              </h3>

              <p className="mt-3 text-sm leading-6 text-base-content/60">
                Upload your resume, provide a job description, and
                use the ATS analysis to identify areas for improvement.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          MISSION
      ===================================================== */}

      <section className="bg-base-100 px-6 py-16">

        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <FaCheckCircle className="text-2xl text-primary" />
          </div>

          <h2 className="text-3xl font-bold">
            Our Mission
          </h2>

          <p className="mt-5 text-lg leading-8 text-base-content/60">
            Our goal is to make professional resume creation
            accessible, simple, and intelligent. Instead of spending
            hours rewriting your resume for every application, we
            want to help you focus on what matters most —
            presenting your skills and experience effectively.
          </p>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-4xl rounded-3xl bg-primary px-8 py-12 text-center text-primary-content shadow-xl">

          <h2 className="text-3xl font-bold">
            Ready to Build Your Resume?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl opacity-80">
            Create a professional resume and analyze it against
            your target job description.
          </p>

          <button className="btn mt-7 bg-base-100 text-base-content hover:bg-base-200">
            Create My Resume
          </button>

        </div>

      </section>

    </div>
  );
};

export default About;
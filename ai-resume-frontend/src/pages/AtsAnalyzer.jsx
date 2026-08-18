import React, { useState } from "react";
import {
  FaFilePdf,
  FaUpload,
  FaArrowRight,
  FaCheckCircle,
  FaTimesCircle,
  FaLightbulb,
  FaRedo,
} from "react-icons/fa";

const AtsAnalyzer = () => {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");

  const [analyzed, setAnalyzed] = useState(false);
  const [atsResult, setAtsResult] = useState(null);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // =========================================================
  // Resume Upload
  // =========================================================

  const handleResumeUpload = (e) => {
    if (isLoading) return;

    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Resume size should not exceed 5MB.");
      return;
    }

    setResume(file);
    setAnalyzed(false);
    setAtsResult(null);
    setError("");
  };

  // =========================================================
  // Analyze Resume
  // =========================================================

  const handleAnalyze = async () => {
    if (isLoading) return;

    if (!resume || !jobDescription.trim()) {
      setError(
        "Please upload your resume and enter a job description."
      );
      return;
    }

    setError("");
    setIsLoading(true);
    setAnalyzed(false);
    setAtsResult(null);

    try {
      const formData = new FormData();

      formData.append("resume", resume);
      formData.append("jobDescription", jobDescription);

      const response = await fetch(
        "http://localhost:8080/api/v1/ats/analyze",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to analyze resume.");
      }

      const data = await response.json();

      console.log("ATS Analysis Response:", data);

      setAtsResult(data);
      setAnalyzed(true);
    } catch (err) {
      console.error("ATS Analysis Error:", err);

      setError(
        err.message ||
          "Something went wrong while analyzing your resume."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // =========================================================
  // Reset
  // =========================================================

  const handleReset = () => {
    setResume(null);
    setJobDescription("");
    setAnalyzed(false);
    setAtsResult(null);
    setError("");
    setIsLoading(false);
  };

  // =========================================================
  // Score Color
  // =========================================================

  const getScoreColor = (score) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-warning";
    return "text-error";
  };

  // =========================================================
  // Status Badge
  // =========================================================

  const getStatusBadge = (status) => {
    if (status === "Excellent Match") {
      return "badge-success";
    }

    if (status === "Good Match") {
      return "badge-success";
    }

    if (status === "Moderate Match") {
      return "badge-warning";
    }

    return "badge-error";
  };

  return (
    <div className="min-h-screen bg-base-200 px-6 py-10">
      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold">
            ATS Resume Analyzer
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-base-content/60">
            Analyze your resume against a job description, discover
            missing keywords, and get AI-powered optimization
            suggestions.
          </p>
        </div>

        {/* =====================================================
            ERROR
        ===================================================== */}

        {error && (
          <div className="alert alert-error mb-6">
            <FaTimesCircle />
            <span>{error}</span>
          </div>
        )}

        {/* =====================================================
            UPLOAD SCREEN
        ===================================================== */}

        {!analyzed && (
          <>
            <div className="rounded-2xl bg-base-100 p-6 shadow-xl md:p-8">

              <div className="grid gap-8 md:grid-cols-2">

                {/* =================================================
                    RESUME UPLOAD
                ================================================= */}

                <div>
                  <h2 className="mb-3 text-xl font-semibold">
                    Upload Your Resume
                  </h2>

                  <p className="mb-5 text-sm text-base-content/60">
                    Upload your resume in PDF format.
                  </p>

                  <label
                    htmlFor="resume-upload"
                    className={`flex min-h-[280px] flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 text-center transition ${
                      isLoading
                        ? "cursor-not-allowed border-base-300 opacity-60"
                        : "cursor-pointer border-base-300 hover:border-primary hover:bg-base-200"
                    }`}
                  >
                    {resume ? (
                      <>
                        <FaFilePdf className="mb-4 text-5xl text-error" />

                        <p className="max-w-full truncate font-medium">
                          {resume.name}
                        </p>

                        <p className="mt-2 text-sm text-base-content/50">
                          {(resume.size / 1024 / 1024).toFixed(2)} MB
                        </p>

                        {!isLoading && (
                          <span className="mt-4 text-sm text-primary">
                            Click to change file
                          </span>
                        )}

                        {isLoading && (
                          <span className="mt-4 text-sm text-base-content/50">
                            File locked during analysis
                          </span>
                        )}
                      </>
                    ) : (
                      <>
                        <FaUpload className="mb-4 text-4xl text-primary" />

                        <p className="font-medium">
                          Drop your resume here
                        </p>

                        <p className="my-2 text-sm text-base-content/50">
                          or
                        </p>

                        <span className="btn btn-primary btn-sm">
                          Browse File
                        </span>

                        <p className="mt-4 text-xs text-base-content/40">
                          PDF only • Maximum 5MB
                        </p>
                      </>
                    )}

                    <input
                      id="resume-upload"
                      type="file"
                      accept=".pdf,application/pdf"
                      className="hidden"
                      onChange={handleResumeUpload}
                      disabled={isLoading}
                    />
                  </label>
                </div>

                {/* =================================================
                    JOB DESCRIPTION
                ================================================= */}

                <div>
                  <h2 className="mb-3 text-xl font-semibold">
                    Job Description
                  </h2>

                  <p className="mb-5 text-sm text-base-content/60">
                    Paste the job description you're applying for.
                  </p>

                  <textarea
                    value={jobDescription}
                    onChange={(e) => {
                      if (isLoading) return;

                      setJobDescription(e.target.value);
                      setAnalyzed(false);
                      setError("");
                    }}
                    disabled={isLoading}
                    placeholder="Paste the job description here..."
                    className={`textarea textarea-bordered h-[280px] w-full resize-none text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary ${
                      isLoading
                        ? "cursor-not-allowed opacity-60"
                        : ""
                    }`}
                  />

                  <div className="mt-2 flex justify-between">
                    {isLoading ? (
                      <span className="text-xs text-warning">
                        Job description locked during analysis
                      </span>
                    ) : (
                      <span></span>
                    )}

                    <span className="text-xs text-base-content/40">
                      {jobDescription.length} characters
                    </span>
                  </div>
                </div>
              </div>

              {/* =================================================
                  ANALYZE BUTTON
              ================================================= */}

              <div className="mt-8 border-t border-base-300 pt-8 text-center">

                <button
                  onClick={handleAnalyze}
                  disabled={
                    !resume ||
                    !jobDescription.trim() ||
                    isLoading
                  }
                  className="btn btn-primary px-8"
                >
                  {isLoading ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      Analyzing Resume...
                    </>
                  ) : (
                    <>
                      Analyze Resume
                      <FaArrowRight />
                    </>
                  )}
                </button>

                {/* =================================================
                    LOADING MESSAGE
                ================================================= */}

                {isLoading ? (
                  <div className="mt-5 flex flex-col items-center gap-2">

                    <p className="text-sm font-medium text-primary">
                      AI is analyzing your resume...
                    </p>

                    <p className="max-w-lg text-xs text-base-content/50">
                      Comparing your resume with the job description,
                      identifying matched keywords, missing skills,
                      and generating optimization suggestions.
                    </p>

                    <span className="loading loading-dots loading-md text-primary"></span>

                  </div>
                ) : (
                  <p className="mt-3 text-xs text-base-content/40">
                    Your resume will be analyzed against the provided
                    job description.
                  </p>
                )}

              </div>
            </div>

            {/* =====================================================
                FEATURE HIGHLIGHTS
            ===================================================== */}

            <div className="mt-10 grid gap-4 sm:grid-cols-3">

              <div className="rounded-xl bg-base-100 p-5 text-center shadow">
                <h3 className="font-semibold">
                  ATS Score
                </h3>

                <p className="mt-2 text-sm text-base-content/60">
                  See how well your resume matches the job.
                </p>
              </div>

              <div className="rounded-xl bg-base-100 p-5 text-center shadow">
                <h3 className="font-semibold">
                  Missing Keywords
                </h3>

                <p className="mt-2 text-sm text-base-content/60">
                  Identify important skills missing from your resume.
                </p>
              </div>

              <div className="rounded-xl bg-base-100 p-5 text-center shadow">
                <h3 className="font-semibold">
                  AI Suggestions
                </h3>

                <p className="mt-2 text-sm text-base-content/60">
                  Get personalized suggestions to improve your resume.
                </p>
              </div>

            </div>
          </>
        )}

        {/* =====================================================
            RESULT DASHBOARD
        ===================================================== */}

        {analyzed && atsResult && (
          <div className="space-y-6">

            {/* =================================================
                RESULT HEADER
            ================================================= */}

            <div className="flex flex-col justify-between gap-4 rounded-2xl bg-base-100 p-6 shadow-xl md:flex-row md:items-center">

              <div>
                <h2 className="text-2xl font-bold">
                  ATS Analysis Result
                </h2>

                <p className="mt-1 text-sm text-base-content/60">
                  Here's how your resume matches the job description.
                </p>
              </div>

              <button
                onClick={handleReset}
                className="btn btn-outline btn-sm"
              >
                <FaRedo />
                Analyze Another Resume
              </button>

            </div>

            {/* =================================================
                SCORE + ASSESSMENT
            ================================================= */}

            <div className="grid gap-6 md:grid-cols-3">

              {/* =================================================
                  SCORE
              ================================================= */}

              <div className="flex flex-col items-center justify-center rounded-2xl bg-base-100 p-8 shadow-xl">

                <p className="text-sm font-medium text-base-content/60">
                  Overall ATS Score
                </p>

                <div className="relative my-5">

                  <div
                    className="radial-progress text-primary"
                    style={{
                      "--value": atsResult.score,
                      "--size": "10rem",
                      "--thickness": "12px",
                    }}
                    role="progressbar"
                  >
                    <div className="flex flex-col items-center">

                      <span
                        className={`text-4xl font-bold ${getScoreColor(
                          atsResult.score
                        )}`}
                      >
                        {atsResult.score}
                      </span>

                      <span className="text-xs text-base-content/50">
                        out of 100
                      </span>

                    </div>
                  </div>

                </div>

                <div
                  className={`badge ${getStatusBadge(
                    atsResult.status
                  )} badge-lg`}
                >
                  {atsResult.status}
                </div>

              </div>

              {/* =================================================
                  OVERALL ASSESSMENT
              ================================================= */}

              <div className="rounded-2xl bg-base-100 p-6 shadow-xl md:col-span-2">

                <h3 className="mb-4 text-lg font-semibold">
                  Overall Assessment
                </h3>

                <p className="text-sm leading-7 text-base-content/70">
                  {atsResult.overallAssessment}
                </p>

              </div>

            </div>

            {/* =================================================
                KEYWORDS
            ================================================= */}

            <div className="grid gap-6 md:grid-cols-2">

              {/* =================================================
                  MATCHED KEYWORDS
              ================================================= */}

              <div className="rounded-2xl bg-base-100 p-6 shadow-xl">

                <div className="mb-5 flex items-center gap-3">

                  <div className="rounded-lg bg-success/10 p-3">
                    <FaCheckCircle className="text-success" />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Matched Keywords
                    </h3>

                    <p className="text-sm text-base-content/50">
                      Keywords already present in your resume
                    </p>
                  </div>

                </div>

                <div className="flex flex-wrap gap-2">

                  {atsResult.matchedKeywords?.length > 0 ? (
                    atsResult.matchedKeywords.map(
                      (keyword, index) => (
                        <span
                          key={`${keyword}-${index}`}
                          className="badge badge-success badge-outline px-3 py-3"
                        >
                          ✓ {keyword}
                        </span>
                      )
                    )
                  ) : (
                    <p className="text-sm text-base-content/50">
                      No matched keywords found.
                    </p>
                  )}

                </div>
              </div>

              {/* =================================================
                  MISSING KEYWORDS
              ================================================= */}

              <div className="rounded-2xl bg-base-100 p-6 shadow-xl">

                <div className="mb-5 flex items-center gap-3">

                  <div className="rounded-lg bg-error/10 p-3">
                    <FaTimesCircle className="text-error" />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Missing Keywords
                    </h3>

                    <p className="text-sm text-base-content/50">
                      Important keywords missing from your resume
                    </p>
                  </div>

                </div>

                <div className="flex flex-wrap gap-2">

                  {atsResult.missingKeywords?.length > 0 ? (
                    atsResult.missingKeywords.map(
                      (keyword, index) => (
                        <span
                          key={`${keyword}-${index}`}
                          className="badge badge-error badge-outline px-3 py-3"
                        >
                          ✕ {keyword}
                        </span>
                      )
                    )
                  ) : (
                    <p className="text-sm text-base-content/50">
                      No missing keywords found.
                    </p>
                  )}

                </div>
              </div>

            </div>

            {/* =================================================
                AI SUGGESTIONS
            ================================================= */}

            <div className="rounded-2xl bg-base-100 p-6 shadow-xl">

              <div className="mb-6 flex items-center gap-3">

                <div className="rounded-lg bg-primary/10 p-3">
                  <FaLightbulb className="text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    AI Optimization Suggestions
                  </h3>

                  <p className="text-sm text-base-content/50">
                    Personalized recommendations to improve your ATS
                    score
                  </p>
                </div>

              </div>

              <div className="space-y-3">

                {atsResult.suggestions?.length > 0 ? (
                  atsResult.suggestions.map(
                    (suggestion, index) => (
                      <div
                        key={index}
                        className="flex gap-4 rounded-xl bg-base-200 p-4"
                      >

                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-content">
                          {index + 1}
                        </div>

                        <p className="text-sm leading-relaxed">
                          {suggestion}
                        </p>

                      </div>
                    )
                  )
                ) : (
                  <p className="text-sm text-base-content/50">
                    No optimization suggestions available.
                  </p>
                )}

              </div>
            </div>

            {/* =================================================
                OPTIMIZE CTA
            ================================================= */}

            <div className="rounded-2xl bg-base-100 p-8 text-center shadow-xl">

              <h3 className="text-xl font-bold">
                Want to improve your score?
              </h3>

              <p className="mx-auto mt-2 max-w-xl text-sm text-base-content/60">
                Let AI optimize your resume based on the job
                description and the missing keywords identified above.
              </p>

              <button className="btn btn-primary mt-5 px-8">
                Optimize Resume with AI
                <FaArrowRight />
              </button>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default AtsAnalyzer;
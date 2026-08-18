import React, { useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

const Resume = ({ data }) => {
  const resumeRef = useRef(null);

  // =========================================================
  // DOWNLOAD ONE-PAGE PDF
  // =========================================================

  const handleDownloadPdf = async () => {
    try {
      const element = resumeRef.current;

      const dataUrl = await toPng(element, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: "#ffffff",
      });

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = 210;
      const pageHeight = 297;

      const img = new Image();

      img.src = dataUrl;

      img.onload = () => {
        const originalWidth = img.width;
        const originalHeight = img.height;

        // Scale the complete resume to fit inside one A4 page
        const widthScale = pageWidth / originalWidth;
        const heightScale = pageHeight / originalHeight;

        const scale = Math.min(widthScale, heightScale);

        const finalWidth = originalWidth * scale;
        const finalHeight = originalHeight * scale;

        // Center the resume on the A4 page
        const x = (pageWidth - finalWidth) / 2;
        const y = (pageHeight - finalHeight) / 2;

        pdf.addImage(
          dataUrl,
          "PNG",
          x,
          y,
          finalWidth,
          finalHeight
        );

        const fileName =
          data?.personalInformation?.fullName?.replace(
            /\s+/g,
            "_"
          ) || "Resume";

        pdf.save(`${fileName}.pdf`);
      };
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const personal = data?.personalInformation || {};

  return (
    <>
      {/* =====================================================
          RESUME
      ===================================================== */}

      <div
        ref={resumeRef}
        className="bg-white text-black mx-auto"
        style={{
          width: "794px",
          minHeight: "1123px",

          // Reduced side padding
          padding: "35px 30px",

          boxSizing: "border-box",

          fontFamily: "Arial, Helvetica, sans-serif",
          lineHeight: "1.35",
        }}
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="text-center mb-5">
          <h1
            className="font-bold uppercase"
            style={{
              fontSize: "28px",
              letterSpacing: "0.5px",
              marginBottom: "6px",
            }}
          >
            {personal.fullName || "Your Name"}
          </h1>

          {personal.location && (
            <p
              style={{
                fontSize: "13px",
                marginBottom: "7px",
              }}
            >
              {personal.location}
            </p>
          )}

          <div
            className="flex justify-center items-center flex-wrap"
            style={{
              gap: "12px",
              fontSize: "12px",
            }}
          >
            {/* Phone */}

            {personal.phoneNumber && (
              <span className="flex items-center gap-1">
                <FaPhone size={10} />
                {personal.phoneNumber}
              </span>
            )}

            {/* Email */}

            {personal.email && (
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1"
                style={{
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                <FaEnvelope size={10} />
                {personal.email}
              </a>
            )}

            {/* GitHub */}

            {personal.gitHub && (
              <a
                href={personal.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
                style={{
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                <FaGithub size={11} />
                GitHub
              </a>
            )}

            {/* LinkedIn */}

            {personal.linkedIn && (
              <a
                href={personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
                style={{
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                <FaLinkedin size={11} />
                LinkedIn
              </a>
            )}
          </div>
        </header>

        {/* =====================================================
            SUMMARY
        ===================================================== */}

        {data?.summary && (
          <section className="mb-5">
            <SectionHeading title="Professional Summary" />

            <p
              style={{
                fontSize: "12.5px",
                textAlign: "justify",
                margin: 0,
              }}
            >
              {data.summary}
            </p>
          </section>
        )}

        {/* =====================================================
            EXPERIENCE
        ===================================================== */}

        {data?.experience?.length > 0 && (
          <section className="mb-5">
            <SectionHeading title="Experience" />

            {data.experience.map((exp, index) => (
              <div
                key={index}
                className="mb-4"
                style={{
                  fontSize: "12.5px",
                }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3
                      className="font-bold"
                      style={{
                        fontSize: "14px",
                        margin: 0,
                      }}
                    >
                      {exp.jobTitle}
                    </h3>

                    <p
                      className="font-semibold"
                      style={{
                        marginTop: "2px",
                        marginBottom: 0,
                      }}
                    >
                      {exp.company}
                      {exp.location && ` | ${exp.location}`}
                    </p>
                  </div>

                  {exp.duration && (
                    <span
                      style={{
                        fontSize: "12px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.duration}
                    </span>
                  )}
                </div>

                {exp.responsibility && (
                  <BulletText text={exp.responsibility} />
                )}
              </div>
            ))}
          </section>
        )}

        {/* =====================================================
            EDUCATION
        ===================================================== */}

        {data?.education?.length > 0 && (
          <section className="mb-5">
            <SectionHeading title="Education" />

            {data.education.map((edu, index) => (
              <div
                key={index}
                className="mb-3"
                style={{
                  fontSize: "12.5px",
                }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3
                      className="font-bold"
                      style={{
                        fontSize: "14px",
                        margin: 0,
                      }}
                    >
                      {edu.university}
                    </h3>

                    <p style={{ margin: 0 }}>
                      {edu.degree}
                    </p>

                    {edu.location && (
                      <p style={{ margin: 0 }}>
                        {edu.location}
                      </p>
                    )}
                  </div>

                  {edu.graduationYear && (
                    <span
                      style={{
                        fontSize: "12px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {edu.graduationYear}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* =====================================================
            PROJECTS
        ===================================================== */}

        {data?.projects?.length > 0 && (
          <section className="mb-5">
            <SectionHeading title="Projects" />

            {data.projects.map((project, index) => (
              <div
                key={index}
                className="mb-4"
                style={{
                  fontSize: "12.5px",
                }}
              >
                {/* Project title */}

                <div className="flex justify-between items-start">
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "14px",
                      margin: 0,
                    }}
                  >
                    {project.title}

                    {project.technologiesUsed?.length > 0 && (
                      <span
                        className="font-normal"
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        {" "}
                        —{" "}
                        {project.technologiesUsed.join(", ")}
                      </span>
                    )}
                  </h3>

                  {project.year && (
                    <span
                      style={{
                        fontSize: "12px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {project.year}
                    </span>
                  )}
                </div>

                {/* Project description */}

                {project.description && (
                  <ProjectDescription
                    description={project.description}
                  />
                )}

                {/* Github */}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#000",
                      fontSize: "11px",
                      textDecoration: "underline",
                      marginLeft: "18px",
                    }}
                  >
                    GitHub
                  </a>
                )}
              </div>
            ))}
          </section>
        )}

        {/* =====================================================
            TECHNICAL SKILLS
        ===================================================== */}

        {data?.skills?.length > 0 && (
          <section className="mb-5">
            <SectionHeading title="Technical Skills" />

            <div
              style={{
                fontSize: "12.5px",
              }}
            >
              {data.skills.map((skill, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    marginBottom: "4px",
                  }}
                >
                  <strong
                    style={{
                      minWidth: "125px",
                    }}
                  >
                    {skill.title}:
                  </strong>

                  <span>
                    {skill.technologies
                      ? skill.technologies.join(", ")
                      : skill.level || ""}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* =====================================================
            CERTIFICATIONS
        ===================================================== */}

        {data?.certifications?.length > 0 && (
          <section className="mb-5">
            <SectionHeading title="Certifications" />

            <ul
              style={{
                fontSize: "12.5px",
                paddingLeft: "18px",
                margin: 0,
              }}
            >
              {data.certifications.map((cert, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "4px",
                  }}
                >
                  <strong>{cert.title}</strong>

                  {cert.issuingOrganization &&
                    ` — ${cert.issuingOrganization}`}

                  {cert.year && ` (${cert.year})`}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* =====================================================
            ACHIEVEMENTS
        ===================================================== */}

        {data?.achievements?.length > 0 && (
          <section className="mb-5">
            <SectionHeading title="Achievements" />

            <ul
              style={{
                fontSize: "12.5px",
                paddingLeft: "18px",
                margin: 0,
              }}
            >
              {data.achievements.map((achievement, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "4px",
                  }}
                >
                  <strong>{achievement.title}</strong>

                  {achievement.year &&
                    ` — ${achievement.year}`}

                  {achievement.extraInformation &&
                    `: ${achievement.extraInformation}`}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* =====================================================
            LANGUAGES
        ===================================================== */}

        {data?.languages?.length > 0 && (
          <section className="mb-5">
            <SectionHeading title="Languages" />

            <p
              style={{
                fontSize: "12.5px",
                margin: 0,
              }}
            >
              {data.languages
                .map((lang) => lang.name)
                .join(", ")}
            </p>
          </section>
        )}

        {/* =====================================================
            INTERESTS
        ===================================================== */}

        {data?.interests?.length > 0 && (
          <section>
            <SectionHeading title="Interests" />

            <p
              style={{
                fontSize: "12.5px",
                margin: 0,
              }}
            >
              {data.interests
                .map((interest) => interest.name)
                .join(", ")}
            </p>
          </section>
        )}
      </div>

      {/* =====================================================
          DOWNLOAD BUTTON
      ===================================================== */}

      <div className="flex justify-center mt-5 mb-5">
        <button
          onClick={handleDownloadPdf}
          className="btn btn-primary"
        >
          Download Resume PDF
        </button>
      </div>
    </>
  );
};

/* ============================================================
   SECTION HEADING
============================================================ */

const SectionHeading = ({ title }) => {
  return (
    <h2
      className="font-bold uppercase"
      style={{
        fontSize: "15px",
        borderBottom: "1.5px solid #000",
        paddingBottom: "3px",
        marginBottom: "10px",
        letterSpacing: "0.4px",
      }}
    >
      {title}
    </h2>
  );
};

/* ============================================================
   PROJECT DESCRIPTION
============================================================ */

const ProjectDescription = ({ description }) => {
  if (!description) return null;

  let bullets = [];

  if (Array.isArray(description)) {
    bullets = description;
  } else {
    bullets = description
      .split(/\n|•/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return (
    <ul
      style={{
        paddingLeft: "18px",
        marginTop: "5px",
        marginBottom: "0",
      }}
    >
      {bullets.map((bullet, index) => (
        <li
          key={index}
          style={{
            marginBottom: "3px",
          }}
        >
          {bullet}
        </li>
      ))}
    </ul>
  );
};

/* ============================================================
   BULLET TEXT
   Used for Experience responsibilities
============================================================ */

const BulletText = ({ text }) => {
  if (!text) return null;

  let bullets = [];

  if (Array.isArray(text)) {
    bullets = text;
  } else {
    bullets = text
      .split(/\n|•/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return (
    <ul
      style={{
        paddingLeft: "18px",
        marginTop: "5px",
        marginBottom: "0",
      }}
    >
      {bullets.map((bullet, index) => (
        <li
          key={index}
          style={{
            marginBottom: "3px",
          }}
        >
          {bullet}
        </li>
      ))}
    </ul>
  );
};

export default Resume;
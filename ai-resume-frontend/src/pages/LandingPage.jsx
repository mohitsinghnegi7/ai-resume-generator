import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaRobot,
  FaMagic,
  FaFileAlt,
  FaDownload,
} from "react-icons/fa";


const LandingPage = () => {
  return (
    <div>
    <div className="min-h-screen bg-base-100">
   

      {/* Hero */}
      <section className="hero min-h-[85vh] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="hero-content flex-col lg:flex-row-reverse gap-16">
          <div className="w-full max-w-md">
            <div className="card bg-base-100 shadow-2xl">
              <div className="card-body">
                <h3 className="text-xl font-bold">
                  Software Engineer
                </h3>

                <p className="text-sm opacity-70">
                  AI Generated Resume
                </p>

                <div className="divider"></div>

                <div className="space-y-3">
                  <div className="h-3 bg-base-300 rounded"></div>
                  <div className="h-3 bg-base-300 rounded"></div>
                  <div className="h-3 bg-base-300 rounded"></div>
                  <div className="h-3 bg-base-300 rounded w-2/3"></div>
                </div>

                <div className="divider"></div>

                <div className="space-y-2">
                  <div className="h-2 bg-primary rounded"></div>
                  <div className="h-2 bg-primary rounded w-4/5"></div>
                  <div className="h-2 bg-primary rounded w-3/5"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-2xl">
            <div className="badge badge-primary badge-lg mb-4">
              AI Powered Resume Builder
            </div>

            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">
              Build a Professional Resume in
              <span className="text-primary"> Seconds</span>
            </h1>

            <p className="py-6 text-lg opacity-80">
              Just describe yourself and our AI will generate a
              polished, ATS-friendly resume tailored for modern
              recruiters.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to={'/generate-resume'} className="btn btn-primary btn-lg">
                Create Resume Free
              </Link>

              <button className="btn btn-outline btn-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Features */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Everything You Need
          </h2>

          <p className="mt-3 opacity-70">
            Powerful AI tools to create job-winning resumes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FaRobot size={36} />,
              title: "AI Generation",
              desc: "Generate resumes from simple descriptions.",
            },
            {
              icon: <FaMagic size={36} />,
              title: "Smart Suggestions",
              desc: "Improve wording and professionalism.",
            },
            {
              icon: <FaFileAlt size={36} />,
              title: "ATS Friendly",
              desc: "Designed to pass recruiter screening.",
            },
            {
              icon: <FaDownload size={36} />,
              title: "PDF Export",
              desc: "Download instantly in PDF format.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="card bg-base-200 hover:shadow-xl transition-all"
            >
              <div className="card-body items-center text-center">
                <div className="text-primary">
                  {item.icon}
                </div>

                <h3 className="card-title">
                  {item.title}
                </h3>

                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-base-200 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">
            How It Works
          </h2>

          <ul className="steps steps-vertical lg:steps-horizontal w-full">
            <li className="step step-primary">
              Describe Yourself
            </li>

            <li className="step step-primary">
              AI Creates Resume
            </li>

            {/* <li className="step step-primary">
              Customize Design
            </li> */}

            <li className="step step-primary">
              Download PDF
            </li>
          </ul>
        </div>
      </section>

      {/* Templates */}
      {/* <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Beautiful Templates
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="card bg-base-200 shadow-xl"
            >
              <div className="card-body">
                <div className="h-96 bg-base-300 rounded-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="bg-base-200 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Loved By Job Seekers
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Got my resume ready in less than 5 minutes.",
              "Beautiful templates and amazing AI suggestions.",
              "Helped me land more interviews quickly.",
            ].map((review, i) => (
              <div
                key={i}
                className="card bg-base-100 shadow"
              >
                <div className="card-body">
                  <p>"{review}"</p>

                  <div className="font-bold mt-4">
                    User {i + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-24">
        <div className="hero rounded-3xl bg-primary text-primary-content">
          <div className="hero-content text-center py-16">
            <div>
              <h2 className="text-5xl font-bold">
                Ready To Build Your Resume?
              </h2>

              <p className="py-6 text-lg">
                Join thousands of professionals using AI
                to create job-winning resumes.
              </p>

              <Link to={'/generate-resume'} className="btn btn-secondary btn-lg">
                Start For Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      
     
    </div>
    </div>
  )
}

export default LandingPage

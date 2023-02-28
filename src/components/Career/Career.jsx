import React, { useState } from "react";
import "./Career.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import NavbarSec from "../Navbar/NavbarSec";

const steps = [
  {
    label: "Examine Yourself",
    description: `What you enjoy doing and what you value can be helpful indicators about how you’d 
    like to spend your working time. We’re not talking
    about finding and following your passion that approach tends to be
    misleading and confusing.`,
  },
  {
    label: "Reflex on your mativations",
    description: `Once you’ve put together a list about you, turn to your motivations
    for working. Perhaps you want a career that will pay a higher
    entry-level salary than comparable occupations, or one that promises
    more flexibility so you can work from anywhere. Most careers won’t
    feature everything you’d like, so it’s important to understand your
    priorities.`,
  },
  {
    label: "Think about your long-term goals",
    description: ` What does your most perfect life look like? Make a list of your
    long-term goals, both personal and professional, to help you
    understand what it might take to reach them. For example: Do you
    want to rise past the managerial ranks and advance to the C-suite of
    a company? Do you want to own a house? Do you want to be able to
    travel—and how often? The list you put together can also help you
    approach a job search more specifically.`,
  },
  {
    label: "Take different self-assessment tests",
    description: `There are a number of tests you can take to evaluate everything from
    your personality to your strengths—and even what career might be a
    good fit. But tests can be overly prescriptive, meaning they tend to
    impose categories on you. Rather than rely on them for a definitive
    answer, use them to continue learning more about yourself and your
    underlying motivations. If they present helpful answers, fold that
    knowledge into the larger picture you’re compiling.`,
  },
  {
    label: "Explore sectors",
    description: `Learning more about each sector and its respective goals may help
    you determine where you’d be a strong fit. Think about which goals
    sound most interesting to you. Private: You’ll be employed through a
    privately owned company or corporation, which typically aims to
    increase growth and revenue. Benefit: Greater potential for growth
    Public: You’ll be employed through a local, state, or federal
    government, which aims to keep public programs and institutions
    operating. Benefit: Greater potential stability Non-profit: You’ll
    be employed through an organization not associated with private or
    public sectors, which is dedicated to addressing or fulfilling a
    public need. While it does not aim to make revenue the way private
    businesses do, it must earn enough to achieve its mission and cover
    overhead.`,
  },
  {
    label: "Explore industries",
    description: `Along with sectors, researching different industries may help you
    identify a few that could be a good fit. Search for established
    industries to see if any seem worth investigating further. (The most common industries
    include energy, consumer goods, and media and entertainment) 
    Make a list of any that sound interesting and
    conduct additional research to find out about major roles, career
    trajectories, and projected growth.`,
  },
  {
    label: "Seek out professional resources",
    description: `In addition to thinking through the areas mentioned above on your
    own, you can also turn to various career resources for more guided
    help. College career center: If you’re still in college, take
    advantage of the career resources your college or university may
    offer. You may be able to meet with a counselor or advisor trained
    to help you transition from college to a career. Career coach: You
    can find a career coach trained to help clients learn more about
    what kinds of work would best suit them. Career coaches are an
    additional expense, so make sure to research their credentials,
    experience, and background to make sure they will be a good fit for
    your needs.`,
  },
];

const Career = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <NavbarSec />
      <div className="text-center career">
        <div>
          <h1
            style={{
              margin: "20px",
            }}
          >
            How to choose your career
          </h1>{" "}
          <div className="career-quiz">
            <a
              className="quiz-link"
              href="https://www.careerexplorer.com/assessments/"
              target="_blank"
            >
              Career Quiz
            </a>
          </div>
          <div className="p-how-to-choose">
            <div>A career is the sum of your professional journey.</div>
            <div className="p-how-to-choose">
              {" "}
              Many people embark on a career because it can help them achieve
              their goals, such as acquiring more knowledge and experience,
              taking on more responsibility, or earning higher salaries. The
              average person spends around one-third of their life working, so
              it’s no surprise that many people want to find a career that will
              be a good fit for them. Choosing a career first means learning as
              much as you can about yourself, your goals, and the larger context
              of work.
              <div className="p-how-to-choose">
                Use the list below to help you begin that process.
              </div>
            </div>
          </div>
        </div>
        <Box className="box-style" sx={{ maxWidth: 800 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel className="step-text">{step.label}</StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>You have completed all steps!</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </div>
    </>
  );
};

export default Career;

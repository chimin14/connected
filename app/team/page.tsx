"use client";

import React from "react";
import styled from "styled-components";
import Footer from '../components/Footer';
import Header from '../components/Header';

const TeamPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-70"
        >
          <source
            src="/images/home/opportunities.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="min-h-screen flex flex-col items-center p-32">
        <h1 className="text-5xl underline font-bold text-customCyan mb-12 z-10">Our Team</h1>
        <Header />

        {/* Dzejlan's Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <StyledWrapper>
            <div className="card">
              <div className="front">
                <img
                  src="/images/team/dzejlan.jpg"
                  alt="Dzejlan Colakhodzic"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="back">
                <img
                  src="/images/team/dzejlan2.jpg"
                  alt="Dzejlan Colakhodzic Hover"
                  className="w-full h-full object-cover"
                />
                <div className="banner">
                  <span>Wanted to be a teacher</span>
                </div>
              </div>
            </div>
          </StyledWrapper>
          <div className="ml-48 bg-customCyan bg-opacity-90 p-6 rounded max-w-xl">
            <p className="text-white font-semibold text-justify italic font-sans text-wrap">
            Motivated and results-driven software engineering student with a knack for turning complex problems into 
            elegant solutions and a proven track record of designing and developing scalable applications using Python,
            JavaScript, and Java. Armed with expertise in modern frameworks and a solid foundation in algorithms, 
            data structures, and mathematical concepts, I thrive on tackling intricate technical challenges and transforming
            ideas into fully functional projects. My approach is equal parts logical rigor and creative flair, ensuring projects 
            are delivered seamlessly from inception to completion. 
            A perpetual learner and tech enthusiast, I am always on the lookout for the latest industry trends and innovative tools
            to expand my skill set. Beyond the code, you'll find me either scaling new heights (quite literally) as I
            explore the world through hiking or gathering inspiration from my travel adventures. Whether it’s debugging a tricky
            piece of code or navigating uncharted trails, I tackle challenges with a sense of humor and an unyielding determination to
            succeed. Ready to bring my passion, creativity, and a pinch of nerdy charm to exciting opportunities!
            </p>
          </div>
        </div>

        {/* Amina's Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <StyledWrapper>
            <div className="card">
              <div className="front">
                <img
                  src="/images/team/amina1.jpg"
                  alt="Amina Jusic"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="back">
                <img
                  src="/images/team/amina2.jpg"
                  alt="Amina Jusic Hover"
                  className="w-full h-full object-cover"
                />
                <div className="banner">
                  <span>Wanted to be a chef</span>
                </div>
              </div>
            </div>
          </StyledWrapper>
          <div className="ml-48 bg-customCyan bg-opacity-90 p-6 rounded max-w-xl">
            <p className="text-white font-semibold text-justify italic font-sans text-wrap">
            Driven and innovative software engineering student with a passion for creating impactful solutions through code.
            With experience in designing and developing robust applications, I excel in using programming languages like Python, 
            JavaScript, and Java, combined with modern frameworks, to craft scalable and user-friendly software. My strong analytical 
            skills and problem-solving mindset enable me to navigate technical complexities while delivering exceptional results.
            Beyond my technical expertise, I embrace every opportunity for growth, be it through collaboration, continuous learning, 
            or taking on challenging projects. My creative outlook allows me to approach problems with fresh perspectives, ensuring both
            efficiency and innovation in my work.
            Outside the digital world, I channel my curiosity and love for exploration into traveling and connecting with diverse cultures while learning different languages.
            As firm believer in balancing hard work with a sense of adventure, I thrive on
            experiences that broaden my horizons, I bring enthusiasm, dedication,
            and a sprinkle of humor to everything I do.
            Ready to turn ideas into reality and create a meaningful impact in the tech world!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 300px;

  .card {
    width: 400px;
    height: 400px;
    position: relative;
    overflow: hidden;
    border-radius: 30px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.705);
    transition: transform 0.4s, box-shadow 0.4s;
  }

  .card:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px 8px rgba(0, 0, 0, 0.705);
  }

  .front,
  .back {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.4s;
  }

  .front {
    z-index: 2;
  }

  .back {
    z-index: 1;
    opacity: 0;
  }

  .card:hover .front {
    opacity: 0;
  }

  .card:hover .back {
    opacity: 1;
  }

  .banner {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    text-align: center;
    padding: 5px 0;
    font-size: 14px;
    font-weight: bold;
  }

  .card-text {
    width: 100%; 
    font-style: italic;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default TeamPage;

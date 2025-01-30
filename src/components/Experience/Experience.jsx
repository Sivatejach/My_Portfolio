import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import "./Experience.css";

const experienceItems = [
  { 
    id: 0,
    title: "Oct 2022 - Apr 2023", 
    cardTitle: "Teaching Assistant (Part Time)", 
    cardSubtitle: "Assisted in coding classes and helped students with programming concepts." 
  },
  { 
    id: 1,
    title: "Yet to Decide", 
    cardTitle: "Future Role", 
    cardSubtitle: "Awaiting next opportunity." 
  }
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const TimeLineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <TimeLineSection>
          <Timeline position="alternate">
            {experienceItems.map((experience, index) => (
              <TimelineItem key={experience.id} position={index % 2 === 0 ? "left" : "right"}>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  {index !== experienceItems.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <h3>{experience.cardTitle}</h3>
                  <p>{experience.cardSubtitle}</p>
                  <p>{experience.title}</p>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimeLineSection>
      </Wrapper>
    </Container>
  );
};

export default Experience;

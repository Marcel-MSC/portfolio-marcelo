import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph } from "../../styles";
import { EducationItem, Institution, Degree } from "./styles";

const Education = ({ user }) => {
  console.log("user education", user.education);
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Education</SectionTitle>
        <ul>
          {user.education.map((education, i) => (
            <EducationItem key={i}>
              <Institution>{education.institution}</Institution>
              <div>
                <Degree>
                  {education.studyType}, {education.area}
                </Degree>{" "}
                <span> &sdot; </span>
                <span>
                  {education.start?.month}/{education.start?.year} to{" "}
                  {education.end?.month}/{education.end?.year}
                </span>
              </div>
              {education.description && (
                <Paragraph>
                  {education.description.replace(/\n\n/g, "\n")}
                </Paragraph>
              )}
            </EducationItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Education;

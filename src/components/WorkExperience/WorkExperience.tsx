import React from 'react';
import * as styles from './WorkExperience.module.css';
import { graphql, useStaticQuery } from 'gatsby';
import Job from '../Job/Job';

const WorkExperience: React.FC = () => {
  const data = useStaticQuery(graphql`
    query JobsQuery {
      allMdx(
        filter: { internal: { contentFilePath: { regex: "/jobs/" } } }
        sort: { frontmatter: { start_date: DESC } }
      ) {
        nodes {
          id
          frontmatter {
            company
            job_title
            location
            start_date
            end_date
            contract
            team
          }
          excerpt
        }
      }
    }
  `);

  return (
    <ul className={styles.jobList}>
      {data.allMdx.nodes.map((node: any) => (
        <Job
          key={node.id}
          company={node.frontmatter.company}
          jobTitle={node.frontmatter.job_title}
          team={node.frontmatter.team}
          contract={node.frontmatter.contract}
          location={node.frontmatter.location}
          startDate={node.frontmatter.start_date}
          endDate={node.frontmatter.end_date}
          excerpt={node.excerpt}
        />
      ))}
    </ul>
  );
};

export default WorkExperience;

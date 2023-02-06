import React from 'react';
import * as styles from './WorkExperience.module.css';
import { graphql, useStaticQuery } from 'gatsby';
import Job from '../Job/Job';

const WorkExperience: React.FC = () => {
  const data = useStaticQuery<Queries.JobsQueryQuery>(graphql`
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
          body
        }
      }
    }
  `);

  return (
    <ul className={styles.jobList}>
      {data.allMdx.nodes.map((node) => (
        <li key={node.id}>
          <Job jobQueryNode={node} />
        </li>
      ))}
    </ul>
  );
};

export default WorkExperience;

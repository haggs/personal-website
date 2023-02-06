import React from 'react';
import * as styles from './Job.module.css';

interface JobProps {
  jobQueryNode: Queries.JobsQueryQuery['allMdx']['nodes'][0];
}

const Job: React.FC<JobProps> = ({ jobQueryNode }) => {
  const { body, frontmatter } = jobQueryNode;

  if (!frontmatter) {
    return null;
  }

  const { company, contract, job_title, team, location, start_date, end_date } =
    frontmatter;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h2>{company}</h2>
        <h3>{job_title}</h3>
        {contract && <h4>{contract}</h4>}
        {team && <h5>{team}</h5>}
        <h6>{location}</h6>
        <p>
          {start_date} - {end_date}
        </p>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Job;

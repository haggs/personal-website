import React from 'react';
import * as styles from './Job.module.css';

interface JobProps {
  company: string;
  contract?: boolean;
  jobTitle: string;
  team?: string;
  location: string;
  startDate: string;
  endDate: string;
  excerpt: string;
}

const Job: React.FC<JobProps> = ({
  company,
  contract,
  jobTitle,
  team,
  location,
  startDate,
  endDate,
  excerpt,
}) => {
  return (
    <li className={styles.container}>
      <h2>{company}</h2>
      <h3>{jobTitle}</h3>
      {contract && <h4>{contract}</h4>}
      {team && <h5>{team}</h5>}
      <h6>{location}</h6>
      <p>
        {startDate} - {endDate}
      </p>
      <p>{excerpt}</p>
    </li>
  );
};

export default Job;

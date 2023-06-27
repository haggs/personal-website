import React, { useContext } from 'react';
import * as styles from './Job.module.css';
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';
import { FiCalendar } from '@react-icons/all-files/fi/FiCalendar';
import { FiMapPin } from '@react-icons/all-files/fi/FiMapPin';
import DarkModeContext from '../../context/DarkModeContext';

interface JobProps {
  jobQueryNode: Queries.JobsQueryQuery['allMdx']['nodes'][0];
}

const Job: React.FC<JobProps> = ({ jobQueryNode }) => {
  const { dark } = useContext(DarkModeContext);

  const { body, frontmatter } = jobQueryNode;

  if (!frontmatter) {
    return null;
  }

  const formatDate = (dateString: string) => {
    if (dateString.toLowerCase() === 'current') {
      return dateString;
    }

    const date = new Date(dateString + '-01');
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      timeZone: 'UTC',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const {
    company,
    contract,
    job_title,
    team,
    location,
    start_date,
    end_date,
    logo_image,
    logo_image_dark,
  } = frontmatter;

  const imageToUse = dark && logo_image_dark ? logo_image_dark : logo_image;
  const logoImage = getImage(imageToUse as ImageDataLike);
  const logoAlt = company ? `${company} logo` : 'Company logo';

  return (
    <div className={styles.container}>
      {logoImage && (
        <div className={styles.imageContainer}>
          <GatsbyImage image={logoImage} alt={logoAlt} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h2>{company}</h2>
        <h3>
          {job_title}
          {team && `, ${team}`} {contract && ' (Contract)'}
        </h3>
        {start_date && (
          <p>
            <FiCalendar className="icon-accent" />
            {formatDate(start_date)} -{' '}
            {end_date ? formatDate(end_date) : 'Today'}
          </p>
        )}
        <p>
          <FiMapPin className="icon-accent" />
          {location}
        </p>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Job;

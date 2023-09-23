import { HeadFC, PageProps, graphql } from 'gatsby';
import PersonalLifePage from '../../components/PersonalLifePage/PersonalLifePage';
import React from 'react';
import Seo from '../../components/Seo/Seo';

const TITLE = 'Wedding';

const Page: React.FC<PageProps<Queries.PersonalLifePageQuery>> = ({ data }) => (
  <PersonalLifePage title={TITLE} data={data}>
    <p>
      On October 8th, 2022, on the shores of Lake St. Clair, I was wed to the
      beautiful Alethea Critides. It was an intimate ceremony held in our
      backyard, attended by about 20 of our friends and family, and officiated
      by my good friend, Tim. After the ceremony, we had dinner in the private
      dining room at the{' '}
      <a href="https://www.shinolahotel.com/" target="_blank" rel="noreferrer">
        Shinola Hotel
      </a>{' '}
      in Detroit. After some drinks and speeches there, we carried on the party
      with piano karaoke at{' '}
      <a href="https://sidgolds.com/detroit/" target="_blank" rel="noreferrer">
        Sid Gold's Request Room
      </a>
      .
    </p>
    <p>
      These photos taken by Detroit based photographer{' '}
      <a href="https://ryansouthen.com" target="_blank" rel="noreferrer">
        Ryan Southen
      </a>
      , capture the highlights of our wedding day.
    </p>
  </PersonalLifePage>
);

export const Head: HeadFC = () => <Seo title={TITLE} />;

export const query = graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "wedding" }
      }
      sort: { relativePath: ASC }
    ) {
      ...PersonalLifePageImages
    }
  }
`;

export default Page;

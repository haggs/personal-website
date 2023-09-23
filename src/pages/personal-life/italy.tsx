import { HeadFC, PageProps, graphql } from 'gatsby';
import PersonalLifePage from '../../components/PersonalLifePage/PersonalLifePage';
import React from 'react';
import Seo from '../../components/Seo/Seo';

const TITLE = 'Italy';

const Page: React.FC<PageProps<Queries.PersonalLifePageQuery>> = ({ data }) => (
  <PersonalLifePage title={TITLE} data={data}>
    <p>
      In 2022, we took a trip to Italy. I've never eaten so well on a trip in my
      life, it's right up there with Japan. We rented a car in Rome and drove to
      Positano, Amalfi, Ravello, Matera, Polignano a Mare, and back to Rome. In
      Polignano a Mare we met up with my good friend Brian who had been living
      in Italy for years.
    </p>
    <p>
      Alethea had been to Italy before but even she was blown away by the places
      we went to. We hiked, we sweated, we challenged our fears, and we had a
      blast.
    </p>
  </PersonalLifePage>
);

export const Head: HeadFC = () => <Seo title={TITLE} />;

export const query = graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "italy" }
      }
      sort: { relativePath: ASC }
    ) {
      ...PersonalLifePageImages
    }
  }
`;

export default Page;

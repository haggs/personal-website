import { HeadFC, PageProps, graphql } from 'gatsby';
import PersonalLifePage from '../../components/PersonalLifePage/PersonalLifePage';
import React from 'react';
import Seo from '../../components/Seo/Seo';

const TITLE = 'Japan';

const Page: React.FC<PageProps<Queries.PersonalLifePageQuery>> = ({ data }) => (
  <PersonalLifePage title={TITLE} data={data}>
    <p>
      Alethea and I took a trip to Japan in 2023. It was right before starting
      my new job at NVIDIA. We had always wanted to go, and when I quit my job,
      Alethea said "well I guess we'll go next year". I said "why?".
    </p>
    <p>
      Japan is incredible. Everywhere you look, there's something new (for an
      American) to see. I had a bucket list of all kinds of japanese food I've
      always wanted to try and we managed to try it all. We visited Tokyo,
      Hakone, Kyoto, Osaka, and Tokyo again. Each place was different from the
      next, and each was great in its own way.
    </p>
  </PersonalLifePage>
);

export const Head: HeadFC = () => <Seo title={TITLE} />;

export const query = graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "japan" }
      }
      sort: { relativePath: ASC }
    ) {
      ...PersonalLifePageImages
    }
  }
`;

export default Page;

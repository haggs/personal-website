import { graphql } from 'gatsby';
import PersonalLifePage from '../../components/PersonalLifePage/PersonalLifePage';
import { PersonalLifePageHead } from '../../components/PersonalLifePageHead/PersonalLifePageHead';

const Page = PersonalLifePage;

export const Head = PersonalLifePageHead;

export const query = graphql`
  query {
    mdx(frontmatter: { slug: { eq: "lake-st-clair" } }) {
      ...PersonalLifePageMdx
    }
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "lake-st-clair" }
      }
      sort: { relativePath: ASC }
    ) {
      ...PersonalLifePageImages
    }
  }
`;

export default Page;

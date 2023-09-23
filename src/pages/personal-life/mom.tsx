import { HeadFC, PageProps, graphql } from 'gatsby';
import PersonalLifePage from '../../components/PersonalLifePage/PersonalLifePage';
import React from 'react';
import Seo from '../../components/Seo/Seo';

const TITLE = 'Mom';

const Page: React.FC<PageProps<Queries.PersonalLifePageQuery>> = ({ data }) => (
  <PersonalLifePage title={TITLE} data={data}>
    <p>
      My mom, Julie Ann Haggerty, passed away on September 22, 2021 after a
      battle with metastatic breast cancer.
    </p>
    <p>
      She was born on April 25, 1955 to my grandparents, John and Elise Huth, in
      New Orleans, Louisiana. She grew up in a family of 8 kids in their house
      on General Haig street in New Orleans' Lakeview neighborhood. She met my
      dad, Tom, in high school when the two of them were "cruisin" with friends.
      Both of their cars stopped at a red light and they began flirting. After
      college they were married and moved to Michigan.
    </p>
    <p>
      Everyone in our family knew my mom as the peacekeeper and advisor. She was
      by far one of the most wise people I've met, and everyone went to her for
      her tough love and good advice. She had a way of making you feel loved
      while she told you to "get your shit together". Her advice was always
      right, whether you wanted to hear it or not.
    </p>
    <p>
      Throughout her cancer treatment she always kept a positive attitude. She
      called herself "The Red Storm", a nod to the quote: Fate Whispers, "You
      Cannot Withstand The Storm." The Warrior Whispers, "I Am The Storm." She
      was the toughest woman on the planet, but she had a playful spirit too.
      She could sing like an angel and swear like a sailor, she was a true
      extrovert.
    </p>
    <p>
      After Hurricane Katrina, she and my brother, Patrick, were the first ones
      at our church to sign up to go to the Gulf Coast and help people put their
      homes and lives back together. On several occasions, she opened her home
      to folks who were going through a tough time and needed a place to live.
      She also counseled women at the local women’s prison as they were about to
      be released into the workforce/business world again.
    </p>
    <p>
      I've always said that my parents are my greatest inspiration in life, so
      it was so hard to let her go. While we're all suffering the great loss of
      such an amazing person, we keep her spirit alive by telling her stories,
      listening to her favorite music, and reminiscing over photos and videos of
      her. See{' '}
      <a href="http://afterthemoviejulie.com" target="_blank" rel="noreferrer">
        afterthemoviejulie.com
      </a>{' '}
      for a glimpse into her wonderful life.
    </p>
  </PersonalLifePage>
);

export const Head: HeadFC = () => <Seo title={TITLE} />;

export const query = graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "mom" }
      }
      sort: { relativePath: ASC }
    ) {
      ...PersonalLifePageImages
    }
  }
`;

export default Page;

import { HeadFC } from 'gatsby';
import React from 'react';
import Seo from '../Seo/Seo';

export const PersonalLifePageHead: HeadFC<Queries.PersonalLifePageQuery> = ({
  data,
}) => <Seo title={data.mdx?.frontmatter?.title} />;

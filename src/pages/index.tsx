import React, { useEffect, useState } from 'react';
import { container, underConstruction } from './index.module.css';
import Seo from '../components/Seo/Seo';
import Layout from '../components/Layout/Layout';

const IndexPage: React.FC = () => {
  const [text, setText] = useState('Under construction');

  useEffect(() => {
    const interval = setInterval(() => {
      const newText =
        text === 'Under construction...' ? 'Under construction' : text + '.';
      setText(newText);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  return (
    <Layout>
      <div className={container}>
        <p className={underConstruction}>{text}</p>
      </div>
    </Layout>
  );
};

export const Head: React.FC = () => <Seo title="Home Page" />;

export default IndexPage;

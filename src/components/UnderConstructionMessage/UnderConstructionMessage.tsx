import React, { useEffect, useState } from 'react';
import * as styles from './UnderConstructionMessage.module.css';

interface UnderConstructionMessageProps {
  message?: string;
}

const UnderConstructionMessage: React.FC<UnderConstructionMessageProps> = ({
  message,
}) => {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(!showCursor);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [showCursor]);

  return (
    <p className="mono">
      {message || 'Under construction'}
      <span className={styles.cursor}>{showCursor ? '_' : ' '}</span>
    </p>
  );
};

export default UnderConstructionMessage;

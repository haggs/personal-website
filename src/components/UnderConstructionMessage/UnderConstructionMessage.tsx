import React, { useEffect, useState } from 'react';

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

  const text = `${message || 'Under construction'}${showCursor ? '_' : ''}`;

  return <p className={'mono'}>{text}</p>;
};

export default UnderConstructionMessage;

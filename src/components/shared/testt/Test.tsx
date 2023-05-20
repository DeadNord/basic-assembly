import s from './Test.module.scss';

import React from 'react';

interface IProp {
  onClick?: () => void;
}

const Test: React.FC<IProp> = () => {
  return (
    <p className={s.span}>
      <span>Test</span>
    </p>
  );
};

export default Test;

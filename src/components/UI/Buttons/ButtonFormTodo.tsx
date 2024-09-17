import React from 'react';

import cl from './ButtonFormTodo.module.css';

type BFormTodo = {
  text: string;
};

const ButtonFormTodo: React.FC<BFormTodo> = ({ text }) => {
  return (
    <div className={cl.btnWrapper}>
      <a className={cl.btnLink} href="#">
        <span>{text}</span>
      </a>
    </div>
  );
};

export default ButtonFormTodo;

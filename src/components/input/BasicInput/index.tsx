import React from 'react';

// styles
import { StyledBasicInput } from './style';

interface BasicInputProps {
  type?: 'text' | 'password';
  placeholder: string;
  formMode?: object;
}

const BasicInput: React.FC<BasicInputProps> = ({ type = 'text', placeholder, formMode }) => {
  return (
    <StyledBasicInput>
      <input type={type} placeholder={placeholder} {...formMode} />
    </StyledBasicInput>
  );
};

export default BasicInput;

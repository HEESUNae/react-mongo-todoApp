import React from 'react';

// style
import { StyledPrimaryBtn } from './style';

interface PrimaryBtnProps {
  type?: 'button' | 'submit';
  label: string;
  onClick?: () => void;
  edit?: boolean;
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ type = 'button', label, edit, onClick }) => {
  return (
    <StyledPrimaryBtn>
      <button type={type} onClick={onClick} className={edit ? 'edit' : ''}>
        {label}
      </button>
    </StyledPrimaryBtn>
  );
};

export default PrimaryBtn;

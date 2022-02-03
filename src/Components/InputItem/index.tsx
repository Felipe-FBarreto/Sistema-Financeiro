import React from 'react';
import { items } from '../../data/items';
import { Item } from '../../types/Item';
import * as C from './styled';

type Props = {
  label: string;
  name: string;
  type: string;
  value?: any;
  onChange?: (target: any) => void;
};

export const Input = ({ label, name, type, value, onChange }: Props) => {
  return (
    <>
      <C.Wrapper>
        <label htmlFor={name}>{label}</label>
        <input id={name} type={type} value={value} onChange={onChange} />
      </C.Wrapper>
    </>
  );
};

import { FC } from 'react';

interface SubProps {
  title: string;
}

const Sub: FC<SubProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default Sub;

import { FC } from 'react';

interface StubProps {
  title: string;
}

const Stub: FC<StubProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default Stub;

import type { FC } from 'react';

export const Page: FC = ({ children }) => {
  return <main className="text-black dark:text-white">{children}</main>;
};

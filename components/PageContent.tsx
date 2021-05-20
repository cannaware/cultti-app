import { FC } from 'react';

export const PageContent: FC = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-4">{children}</div>
  );
};

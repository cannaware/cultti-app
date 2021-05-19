import React, { FC } from 'react';

export const PageContent: FC = ({ children }) => {
  return <div className="text-black dark:text-white h-screen p-4">{children}</div>;
};

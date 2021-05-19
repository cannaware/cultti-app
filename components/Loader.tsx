import { FC } from 'react';

export const Loader: FC = () => {
  const circleCommonClasses = 'h-2.5 w-2.5 bg-lime-500 dark:bg-lime-400 rounded-full';

  return (
    <div className="flex">
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
      <div className={`${circleCommonClasses} animate-bounce400`}></div>
    </div>
  );
};

export const OverlayLoader: FC = () => {
  return (
    <div className="absolute z-50 w-full h-full overflow-hidden flex justify-center items-center">
      <Loader />
    </div>
  );
};

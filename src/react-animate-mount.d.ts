declare module 'react-animate-mount' {
  import React, { ReactNode } from 'react';

  interface MutualProps {
    duration?: number;
    type?: 'slide' | 'fade';
    onAnimateComplete?: () => void;
    children: ReactNode;
  }

  export interface AnimateProps extends MutualProps {
    show: boolean;

    appear?: boolean;
  }

  export interface AnimateGroupProps extends MutualProps {}

  export const Animate: (props: AnimateProps) => React.SFC<AnimateProps>;
  export const AnimateGroup: (props: AnimateGroupProps) => React.SFC<AnimateGroupProps>;
}
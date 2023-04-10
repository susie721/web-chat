'use client';

import React, { FC } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

interface BasicScrollToBottomProps {
  mode?: 'bottom' | 'top';
  checkInterval?: number;
  className?: string;
  children?: React.ReactNode;
  initialScrollBehavior?: 'auto' | 'smooth';
  scroller?: () => number;
  id?: string;
}
 const ScrollToBottomCompontent: FC<BasicScrollToBottomProps> =  ({
  mode = 'bottom',
  checkInterval= 150,
  className = '',
  children = null,
  initialScrollBehavior = 'smooth',
  scroller = () => Infinity,
  id = 'scroll-to-bottom'
}) => {
  return (
    <ScrollToBottom className="chat-container" mode={mode} initialScrollBehavior={initialScrollBehavior} checkInterval={checkInterval} scroller={scroller}>
      {children}
    </ScrollToBottom>
  );
};
export default ScrollToBottomCompontent;
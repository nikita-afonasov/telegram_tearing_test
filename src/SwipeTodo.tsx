import { useSpring, animated, interpolate } from 'react-spring';
import { useDrag } from 'react-use-gesture';
// import { backPaper, frontPaper, swiper } from '../TodoList/TodoList.module.scss';
import './App.css'
import React from 'react';

type MyComponentProps = {
  children: React.ReactNode;
}

export default function SwipeTodo({children}: MyComponentProps) {
  // @ts-ignore
  const [{x, y}, set] = useSpring(() => ({x: 0, y: 0}));
  // @ts-ignore
  const bindSwipe = useDrag(({down, movement: [mx, my], velocity}) => {
    let realisticX = Math.min(mx / 2, 230);
    let realisticY = my;
    if (!down) {
          // either torn or back based on current position
          realisticX = 0;
        }
    set({x: realisticX, y: realisticY});
  });

return (
    <animated.div key="1" {...bindSwipe()} className="swiper" style={{overflow: 'hidden', width: '100%', right: interpolate([x], (x) => `-${x}px`)}}>
      <animated.div className="backPaper" style={{width: interpolate([x], x=> `${x}px`), transform: 'scaleX(-1)'}}></animated.div>
      <animated.div className="frontPaper" style={{left: interpolate([x], x => `-${x}px`)}}>
        {children}
      </animated.div>
    </animated.div>
)
}
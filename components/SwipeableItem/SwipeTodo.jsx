import { useSpring, animated, interpolate } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { backPaper, frontPaper, swiper } from '../TodoList/TodoList.module.scss';

export default function SwipeTodo({action, children}) {
  const [{x, y}, set] = useSpring(() => ({x: 0, y: 0}));
  const bindSwipe = useDrag(({down, movement: [mx, my], velocity}) => {
    let clampedVelocity = velocity;
    let realisticX = mx * (1 + clampedVelocity);
    let realisticY = my;

    if (!down) {
      // either torn or back based on current position
      realisticX = realisticX > 150? window.innerWidth: 0;
    }

    set({x: realisticX, y: realisticY});
  });

  return (
    // <animated.div key={action.id} {...bindSwipe()} style={{transform: interpolate(x, x => `translate(${x}px, ${y}px)`)}}>
    // <animated.div key={action.id} {...bindSwipe()} style={{position: 'absolute', right: '0', height: '100%', overflow: 'hidden', width: interpolate([x], (x) => `calc(100% - ${x}px)`)}}>
    <animated.div key={action.id} {...bindSwipe()} className={swiper} style={{right: interpolate([x], (x) => `-${x}px`)}}>
      <animated.div className={backPaper} style={{width: interpolate([x], x=> `${x}px`)}}></animated.div>
      <animated.div className={frontPaper} style={{left: interpolate([x], x => `-${x}px`)}}>
        {children}
      </animated.div>
    </animated.div>

  )
}
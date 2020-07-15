import { useSpring, animated, interpolate } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { underFlap, paperCurl } from '../TodoList/TodoList.module.scss';

export default function SwipeTodo({action, children}) {
  const [{x, y}, set] = useSpring(() => ({x: 0, y: 0}));
  const bindSwipe = useDrag(({down, movement: [mx, my]}) => {
    set({x: down? mx: 0, y: down? my: 0});
  });

  return (
    // <animated.div key={action.id} {...bindSwipe()} style={{transform: interpolate(x, x => `translate(${x}px, ${y}px)`)}}>
    // <animated.div key={action.id} {...bindSwipe()} style={{position: 'absolute', right: '0', height: '100%', overflow: 'hidden', width: interpolate([x], (x) => `calc(100% - ${x}px)`)}}>
    <animated.div key={action.id} {...bindSwipe()} style={{position: 'absolute', right: '0', height: '100%', overflow: 'hidden', width: '100%', right: interpolate([x], (x) => `-${x}px`)}}>
      <animated.div className={underFlap} style={{width: interpolate([x], x=> `${x}px`)}}></animated.div>
      <animated.div style={{width: '150px', height: '150px', position: 'absolute', left: interpolate([x], x => `-${x}px`)}}>
        {children}
      </animated.div>
    </animated.div>

  )
}
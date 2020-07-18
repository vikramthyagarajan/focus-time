import { useSpring, animated, interpolate } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import CheckIcon from '@material-ui/icons/Check'
import { backPaper, checkFeedback, frontPaper, swiper } from '../TodoList/TodoList.module.scss';

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
    <>
    <animated.div 
      className={checkFeedback} 
      style={{transform: x.interpolate({range: [0, 100], output: [`scale(1)`, `scale(1.2)`], extrapolate: 'clamp'}),
        color: x.interpolate({range: [50, 100], output: [`#49BF57`, `#0A7F18`], extrapolate: 'clamp'})
        }}
      >
        <CheckIcon fontSize="inherit" />
    </animated.div>
    <animated.div key={action.id} {...bindSwipe()} className={swiper} style={{right: interpolate([x], (x) => `-${x}px`)}}>
      <animated.div className={backPaper} style={{width: interpolate([x], x=> `${x}px`)}}></animated.div>
      <animated.div className={frontPaper} style={{left: interpolate([x], x => `-${x}px`)}}>
        {children}
      </animated.div>
    </animated.div>
    </>

  )
}
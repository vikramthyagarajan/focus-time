import { useSpring, animated, interpolate } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import CheckIcon from '@material-ui/icons/Check'
import ClearIcon from '@material-ui/icons/Clear'
import { backPaper, checkFeedback, checkIcon, deleteIcon, frontPaper, swiper } from '../TodoList/TodoList.module.scss';

export default function SwipeTodo({action, children, onCheck, onDelete}) {
  const [{x, y, xDir}, set] = useSpring(() => ({x: 0, y: 0, xDir: 0}));
  let dir = 0;
  const bindSwipe = useDrag(({down, movement: [mx, my], delta: [xDelta], velocity, direction: [xSwipeDir], offset: [xOffset], first}) => {
    let clampedVelocity = velocity;
    let realisticX = mx * (1 + clampedVelocity);
    let realisticY = my;
    let dir = realisticX > 0? 1: -1;

    if (!down) {
      // either torn or back based on current position
      if (dir === 1) {
        realisticX = realisticX > 150? window.innerWidth: 0;
        onCheck();
      }
      if (dir === -1) {
        realisticX = realisticX < -150? -1 * window.innerWidth: 0;
        onDelete();
      }
    }

    set({x: realisticX, y: realisticY, xDir: dir});
  });

  return (
    // <animated.div key={action.id} {...bindSwipe()} style={{transform: interpolate(x, x => `translate(${x}px, ${y}px)`)}}>
    // <animated.div key={action.id} {...bindSwipe()} style={{position: 'absolute', right: '0', height: '100%', overflow: 'hidden', width: interpolate([x], (x) => `calc(100% - ${x}px)`)}}>
    <>
    <animated.div 
      className={checkFeedback} 
      style={{transform: x.interpolate({range: [-100, -50, 0, 100], output: [`scale(1.2)`, `scale(1)`, `scale(1)`, `scale(1.2)`], extrapolate: 'clamp'}),
        }}
      >
        <animated.div className={checkIcon} style={{
            display: xDir.interpolate(xDir => xDir > 0? 'block': 'none'),
            color: x.interpolate({range: [50, 100], output: [`#49BF57`, `#0A7F18`], extrapolate: 'clamp'})
          }}>
          <CheckIcon fontSize="inherit" />
        </animated.div>
        <animated.div className={deleteIcon} style={{
            display: xDir.interpolate(xDir => xDir < 0? 'block': 'none'),
            color: x.interpolate({range: [-100, -50], output: [`#D71809`, `#DD554B`], extrapolate: 'clamp'})
          }}>
          <ClearIcon fontSize="inherit" />
        </animated.div>
    </animated.div>
    <animated.div key={action.id} {...bindSwipe()} className={swiper} style={{left: interpolate([x], (x) => `${x}px`)}}>
      <animated.div className={backPaper} style={{
        left: xDir.interpolate(xDir => xDir > 0? '0': 'initial'),
        right: xDir.interpolate(xDir => xDir < 0? '0': 'initial'),
        width: interpolate([x], x=> `${Math.abs(x)}px`)}}></animated.div>
      <animated.div className={frontPaper} style={{
        right: interpolate([x, xDir], (x, xDir) => xDir < 0? `-${x}px`: '0'),
        left: interpolate([x, xDir], (x, xDir) => xDir > 0? `-${Math.abs(x)}px`: '0')
      }
      }
        >
          {children}
      </animated.div>
    </animated.div>
    </>

  )
}
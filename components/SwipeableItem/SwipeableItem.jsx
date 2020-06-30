import { wrapper, content, background, bouncingListItem } from './SwipeableItem.module.scss'
import { useRef, Component } from 'react'

export function SwipeableContent({children}) {
  return (
    children
  )
}

export function SwipeableBackground({children}) {
  return (
    children
  )
}

class SwipeHandler {
  left = 0
  dragStartX = 0
  dragged = false
  contentEl = null
  backgroundEl = null
  wrapperEl = null
  fpsInterval = 1000/60
  startTime = null
  onSwipeCallback = null

  constructor() {

    this.onDragStart = this.onDragStart.bind(this)
    this.onDragStartMouse = this.onDragStartMouse.bind(this)
    this.onDragStartTouch = this.onDragStartTouch.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onTouchMove = this.onTouchMove.bind(this)
    this.onDragEnd = this.onDragEnd.bind(this)
    this.onDragEndMouse = this.onDragEndMouse.bind(this)
    this.onDragEndTouch = this.onDragEndTouch.bind(this)
    this.updatePosition = this.updatePosition.bind(this)
  }

  onDragStart(clientX) {
    this.dragged = true
    this.dragStartX = clientX
    this.startTime = Date.now()
    this.contentEl.className = content
    requestAnimationFrame(this.updatePosition)
  }
  
  onDragStartMouse(evt) {
    this.onDragStart(evt.clientX)
    window.addEventListener("mousemove", this.onMouseMove)
  }
  
  onDragStartTouch(evt) {
    const touch = evt.targetTouches[0]
    this.onDragStart(touch.clientX)
    window.addEventListener("touchmove", this.onTouchMove)
  }

  onMouseMove(evt) {
    this.left = evt.clientX - this.dragStartX;
    if (this.left > 0) {
      this.left = 0
    }
  }

  onTouchMove(evt) {
    let clientX = evt.targetTouches[0]
    this.left = clientX - this.dragStartX
    if (this.left > 0) {
      this.left = 0
    }
  }

  onDragEnd() {
    if (this.dragged) {
      this.dragged = false
      if (!this.contentEl) {
        this.left = 0
        return
      }

      if (this.left < this.backgroundEl.offsetWidth * -1) {
        this.left = this.contentEl.offsetWidth * -2
        this.backgroundEl.style.transform = `translateX(${this.left}px)`
        // this.wrapperEl.style.maxHeight = 0
        this.onSwiped()
      }
      else {
        this.left = 0
      }

      this.contentEl.className = bouncingListItem
      this.contentEl.style.transform = `translateX(${this.left}px)`
    }
  }

  onDragEndMouse(evt) {
    window.removeEventListener('mousemove', this.onMouseMove)
    this.onDragEnd()
  }

  onDragEndTouch(evt) {
    window.removeEventListener('touchmove', this.onTouchMove)
    this.onDragEnd()
  }

  updatePosition() {
    if (this.dragged)
      requestAnimationFrame(this.updatePosition)

    const now = Date.now()
    let elapsed = now - this.startTime

    if (this.dragged && elapsed > this.fpsInterval) {
      let left = this.left
      let backgroundWidth = this.backgroundEl.offsetWidth * -1
      if (left < backgroundWidth) {
        left = backgroundWidth
      }
      this.contentEl.style.transform = `translateX(${left}px)`

      const opacity = (Math.abs(this.left) / 100).toFixed(2)
      if (opacity < 1 && opacity.toString() !== this.backgroundEl.style.opacity) {
        this.backgroundEl.style.opacity = opacity.toString()
      }
      if (opacity >= 1) {
        this.backgroundEl.style.opacity = "1"
      }
    }
  }

  onSwiped() {
    console.log('swiped')
    this.onSwipeCallback()
  }

}

export class SwipeableItem extends Component {
  constructor() {
    super()
    this.swipeHandler = new SwipeHandler()
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.swipeHandler.onDragEndMouse)
    window.addEventListener('touchend', this.swipeHandler.onDragEndTouch)
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.swipeHandler.onDragEndMouse)
    window.removeEventListener('touchend', this.swipeHandler.onDragEndTouch)
  }

  render() {
    let contentEl, backgroundEl = null

    React.Children.map(this.props.children, (child, index) => {
      if (child.type.name === SwipeableContent.name) {
        contentEl = child
      }
      else if (child.type.name === SwipeableBackground.name) {
        backgroundEl = child
      }
    })
    this.swipeHandler.onSwipeCallback = this.props.onSwipe

    return (
      <div className={wrapper}
        ref={el => this.swipeHandler.wrapperEl = el}
        >
        <div className={content} 
          ref={el => this.swipeHandler.contentEl = el}
          onMouseDown={this.swipeHandler.onDragStartMouse}
          onTouchStart={this.swipeHandler.onDragStartTouch}
          >
            {contentEl}
        </div>
        <div
          className={background}
          ref = {el => this.swipeHandler.backgroundEl = el}
          >
            {backgroundEl}
        </div>
      </div>
    )
  }
}

import { useEffect, useState } from 'react'
import './App.css'

interface Position {
  x: number;
  y: number;
}

const initialPosition: Position = {x: 0, y: 0}

const translate = (position: Position): string => {
  return `translate(${position.x}px, ${position.y}px)`
}

function App() {
  const [enabled, setEnabled] = useState(true)
  const [position, setPosition] = useState(initialPosition)

  const handleClick = () => { setEnabled(!enabled) }
  const handleMove = (event: PointerEvent) => {
    // setTimeout(() => {
    //   const {clientX, clientY} = event;
    //   setPosition({x: clientX, y: clientY});
    // }, 100)
    const {clientX, clientY} = event;
    setPosition({x: clientX, y: clientY});
  };

  useEffect(() => {
    if (enabled) { window.addEventListener('pointermove', handleMove);}
    return () => { window.removeEventListener('pointermove', handleMove);}
  }, [enabled])

  return (
    <main>
        <div style={{
          position: 'absolute',
          // backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backgroundImage: 'url(https://video-images.vice.com/articles/5f6e31c9c408fe009b044bb8/lede/1601057405102-peepo.png?crop=0.5552699228791774xw:1xh;center,center)',
          backgroundSize:     'cover',
          backgroundRepeat:   'no-repeat',
          backgroundPosition: 'center center',
          border: '1px solid #fff',
          borderRadius: '50%',
          // opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 200,
          height: 200,
          transform: translate(position),
          cursor: 'none!important'
        }}/>
      {/* <h3 style={{
        color: 'black',
      }}>Peepo Follow</h3> */}
      {/* <button onClick={handleClick}>{enabled ? 'stop' : 'start'} following mouse</button> */}
    </main>
  )
}

export default App

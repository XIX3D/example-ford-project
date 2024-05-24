import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener('message', (event) => {
      if (event.origin === "http://localhost:3000") {
        console.log("SOMETHING", JSON.parse( event.data ));
      }
    });
  }, []);

  return (
    <div className="container">
      <header>Nav Bar</header>
      <iframe
        className="visualizer"
        ref={ref}
        src="https://web-visualizer-dev.vercel.app/visualizer?vehicle=13"
        allowFullScreen={true}
      >
      </iframe>
      <footer>Footer</footer>
    </div>
  )
}

export default App

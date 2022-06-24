 import {useState, useEffect} from 'react'
 import Content from './Content'

 const gifts = [
   'CPU i9',
   'RAM 32GB',
   'RGB Keyboard',
 ]

function App() {
  const [show, setShow] = useState(false)


  
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content/>}
    </div>
  );
}

export default App;

import './App.css';
import Home from './Components/Home/Home';
import Box from './Components/Box/Box';
import { useEffect, useState } from 'react';
import {Container, BoxImg, Img1, Img2 } from './Components/Container/StylesContainer'

function App() {

const [items, setItems] = useState([])
const [info, setInfo] = useState('')

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${info}`)
    const data = await response.json()
    setItems(data)  
    // console.log(data);
  }
  fetchData()
}, [info])
  return (
    <div className="App">
      <Container>
        <BoxImg>
          <Img1 src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
          <Img2 src='https://images.unsplash.com/photo-1519817914152-22d216bb9170?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
        </BoxImg>
      </Container>
    </div>
  );
}

export default App;

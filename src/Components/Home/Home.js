import React, { useState } from 'react'
import Box from '../Box/Box'
import { Container, Boxes, Search} from '../StyleHome/styleHome'

const Home = ({items, getInfo}) => {
    const [input, setInput] = useState('')

    const onChange = (e) => {
        setInput(e)
        getInfo(e)
    }
  return (
    <Container>
        <Search>
            <h2>Search the character</h2>
            <form>
                <input 
                type="text"
                placeholder="insert the name"
                autofocus
                value={input}
                onchange={(e) => setInput(e.target.value)}
                />
            </form>
        </Search>
        <Boxes>
            {items.map((item) => {
                <Box key={item.char_id} item={item} />
            })}
        </Boxes>
    </Container>
  )
}

export default Home
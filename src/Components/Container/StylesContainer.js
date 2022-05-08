import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`
export const BoxImg = styled.div`
position: relative;
height: 100vh;
`
export const Img1 = styled.img`
position: absolute;
height: 100vh;
/* width: 100%; */
object-fit: contain;
 top: 140px; 
left: 100px;
z-index: 2;
`
export const Img2 = styled.img`
object-fit: contain;
width: 100%;
`
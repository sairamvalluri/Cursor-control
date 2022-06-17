import styled, {createGlobalStyle, css} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @keyframes glow {
    0% {
      box-shadow: rgb(234,115,49) 0 0 0px;
    }

    100%{
      box-shadow: rgb(234,115,49) 20PX 30px 150px;
    }
  }
 body{
   color: #fbfbfb;
   height: 100vh;
   width: 100vw;
   margin: 0;
   padding: 0;
   overflow: hidden;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   background:#2828e6;
   font-family:'Work Sans', sans-serif;
   font-weight: 500;
 }
 `

export const Wrapper = styled.section.attrs(({$color}) => ({
  style: {
    backgroundColor: `hsl(${$color}, 69%, 13%)`
  }
}))`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

export const ImageContainer = styled.div.attrs(({$isTogether}) => ({
  style: {
    animation: $isTogether ? 'glow 3s infinite alternate' : 'none'
  }
}))`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  height: 550px;
  width: 400px;
`

export const AbsoluteCenter = css`
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`

export const Button = styled.button`
  ${AbsoluteCenter}
  background: none;
  border: 2px solid #fbfbfb;
  border-radius: 100%;
  color: #fbfbfb;
  cursor: pointer;
  font-size: 34px;
  font-weight: 600;
  font-family: 'Work Sans', sans-serif;
  line-height: 1;
  text-transform: uppercase;
  padding: 25px 0 20px;
  width: 300px;
  z-index: 1;

  @media (max-width: 700px) {
    font-size: 24px;
    width: 220px;
  }
`

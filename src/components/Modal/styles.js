import styled from 'styled-components'
import {AbsoluteCenter} from '../../styles'

export const Modal = styled.div`
  ${AbsoluteCenter}
  bottom: 20%;
  animation: glow 1s forwards;
  background: #fbfbfb;
  box-sizing: border-box;
  max-width: 500px;
  padding: 50px;
  height: 430px;
  width: calc(100vw - 60px);
  z-index: 3;

  @media (max-width: 700px) {
    padding: 30px;
    width: calc(100vw- 30px);
  }
`

export const BG = styled.div`
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  height: 100vh;
  position: fixed;
  width: 100vw;
  z-index: 2;
`

export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 30px;
  width: 30px;
  padding: 0;
  position: absolute;
  right: 50px;
  top: 10px;

  &::before,
  &::after {
    background: #1b1a17;
    content: '';
    position: absolute;
    height: 25px;
    width: 2px;
    left: 60px;
    top: 0;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  @media (max-width: 700px) {
    right: 50px;
    top: 10px;
  }
`

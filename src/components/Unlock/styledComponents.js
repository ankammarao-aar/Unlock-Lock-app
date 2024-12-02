// Style your elements here
import styled from 'styled-components'

export const LockContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  height: 90px;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    height: 100px;
  }
`

export const Heading = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: normal;
  color: #e2e8f0;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`

export const Button = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  background-color: #06b6d4;
  color: #ffffff;
  padding: 10px;
  padding-left: 16px;
  padding-right: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 100px;
`

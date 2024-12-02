// Write your code here
import {useState} from 'react'

import {LockContainer, Image, Heading, Button} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(false)

  const onClickUnlock = () => {
    setLock(prev => !prev)
  }

  const img = lock
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const changeName = lock ? 'Unlocked' : 'Locked'
  const changeBtnName = lock ? 'Lock' : 'Unlock'

  return (
    <LockContainer>
      <Image src={img} alt={lock ? 'Unlock' : 'lock'} />
      <Heading>Your Device is {changeName}</Heading>
      <Button type="button" onClick={onClickUnlock}>
        {changeBtnName}
      </Button>
    </LockContainer>
  )
}

export default Unlock

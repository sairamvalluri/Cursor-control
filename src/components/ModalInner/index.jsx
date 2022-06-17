import React, {useState} from 'react'
import {Container, H3, P, Socials, H4, SuccessContainer} from './styles'
import Form from '../Form'
import {ReactComponent as Happy} from './emoji.svg'
import {ReactComponent as Instagram} from './Instagram.svg'
import {ReactComponent as Facebook} from './Facebook.svg'
import {ReactComponent as Twitter} from './Twitter.svg'

const Input = ({handleSuccess}) => (
  <Container>
    <H3>Sign Up</H3>
    <P>
      Join our newsletter to be notified of when the course is going to be
      started{' '}
    </P>
    <Form handleSuccess={handleSuccess} />
  </Container>
)

const Success = () => (
  <SuccessContainer>
    <Happy />
    <H4>yay! We're so excited!</H4>
    <p>
      We hope you are too. In the meantime you can follow us on social media to
      keep up to date:
    </p>
    <Socials>
      <Instagram />
      <Twitter />
      <Facebook />
    </Socials>
  </SuccessContainer>
)

const ModalInner = () => {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSuccess = () => {
    setShowSuccess(true)
  }

  return showSuccess ? <Success /> : <Input handleSuccess={handleSuccess} />
}
export default ModalInner

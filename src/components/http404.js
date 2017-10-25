import React from 'react'
import { Link } from 'react-router-dom'

import {
  Container,
  Header,
  Grid,
  Image,
  Icon
} from 'semantic-ui-react'

import logo from '../assets/images/logo.svg';

const Http404 = () => (
  <div>
    <Container textAlign='center'>
      <Grid.Row>
        <Image centered size='large' src={logo} alt="logo" />
      </Grid.Row>
      <Grid.Row>
        <Header as='h1'>PAGE NOT FOUND</Header>
        <Link to='/'><Icon name='home' />Home</Link>
      </Grid.Row>
    </Container>
  </div>
)

export default Http404
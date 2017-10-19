import React from 'react'
import { Link } from 'react-router-dom'

import {
  Container,
  Header,
  Grid,
  Image
} from 'semantic-ui-react'

import logo from '../assets/logo.svg';

const Dashboard = () => (
  <div>
    <Container textAlign='center'>
      <Grid.Row>
        <Image centered size='large' src={logo} />
      </Grid.Row>
      <Grid.Row>
        <Header as='h1'>Dashboard</Header>
      </Grid.Row>
    </Container>
  </div>
)

export default Dashboard
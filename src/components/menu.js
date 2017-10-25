import React from 'react'
import { Link } from 'react-router-dom'

import {
  Button,
  Container,
  Image,
  Menu
} from 'semantic-ui-react'

import logo from '../assets/images/logo.svg';


const AppMenu = () => (
  <Container>
    <Menu inverted pointing secondary size='large'>
      <Menu.Item>
        <Image className="logo" src={logo} alt="logo" size='mini'/>
      </Menu.Item>
      <Menu.Item as='a' active>
        <Link to='/'>Home</Link>
      </Menu.Item>
      <Menu.Item as='a'>
        <Link to='/about'>About</Link>
      </Menu.Item>
      <Menu.Item position='right'>
        <Button as='a' inverted>
          <Link to='/login'>Log in</Link>
        </Button>
        <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
          Sign Up
        </Button>
      </Menu.Item>
    </Menu>
  </Container>
)

const AppMenuFixed = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item>
        <Image className="logo" src={logo} alt="logo" size='mini'/>
      </Menu.Item>
      <Menu.Item as='a' active>
        <Link to='/'>Home</Link>
      </Menu.Item>
      <Menu.Item as='a'>
        <Link to='/about'>About</Link>
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item className='item'>
          <Button as='a'>
            <Link to='/login'>Log in</Link>
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button as='a' primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export { AppMenu, AppMenuFixed }
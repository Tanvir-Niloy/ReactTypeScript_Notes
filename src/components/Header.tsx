import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

interface HeaderProps {
    
}

 const Header: React.FunctionComponent<HeaderProps> = ( Props) => {
    return (
        <Navbar fixed='top' bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
        React TypeScript Notes
      </Navbar.Brand>
    </Container>
  </Navbar>
    )
}


export default Header
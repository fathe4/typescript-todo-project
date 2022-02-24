import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';


const Header: React.FunctionComponent = () => {
    return <Navbar bg="dark">
        <Container>
            <Navbar.Brand href="#home">
                <img
                    src="https://assets-global.website-files.com/5e3177cecf36f6591e4e38cb/5ea2a86505e63bdd814cf868_Logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
        </Container>
    </Navbar>
};

export default Header;

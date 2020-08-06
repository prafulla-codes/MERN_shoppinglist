import React,{Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Container
} from 'reactstrap';

class AppNavBar extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpen:false
        }
    }
    render(){ return <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Vaini's Kitchen</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}></NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/Pika1998">
                                    Github
                                </NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    }   
    toggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
}



export default AppNavBar;
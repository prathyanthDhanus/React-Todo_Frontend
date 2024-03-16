
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const CustomNavbar = () => {

  const navigate = useNavigate();
  return (

    <div>
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">TodoNote</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/add/task">Add Task</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <div>
      <FaUserCircle onClick={()=>navigate('/view/profile')}/>
      <IoNotifications />
      </div>
    </Container>
  </Navbar>
    
    
    </div>
  )
}

export default CustomNavbar
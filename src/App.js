
import  Prop from "./Profile/Profile";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

const func=(x)=>{
  window.alert(x)
}
function App() {
  return (

    <div>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <div className="profil1">
      <Prop name={"Asma Sboui"} bio="live in Tunisia" profession="IT engineer" func={func}>
        <img src="photo.jpg" alt="photo_nature" />
        
      </Prop>
      </div>
    </div>
  );
}

export default App;

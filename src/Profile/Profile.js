import React from "react"
import PropTypes from 'prop-types';
import {Card , Button} from 'react-bootstrap';
const Prop=props=>{
const {name, bio, profession, func, children}=props
return(
<>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="photo.jpg" />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {bio}
    </Card.Text>
    <Card.Text>{profession}</Card.Text>
    <Button variant="primary" onClick={()=>func(name)}>cliquez ici</Button>
  </Card.Body>
</Card>

{/* {children} */}

</>

//  <div classname="profile2">
//  <h1>{name}</h1>
//  <h2>{bio}</h2>
//  <h3>{profession}</h3>
//  <p>{props.children}</p>
//  <button onClick={()=>func(name)}>cliquer ici</button>
//  </div>
)
}
Prop.propTypes = {
  name: PropTypes.string
};
export default Prop
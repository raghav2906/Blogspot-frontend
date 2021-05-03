import react from 'react'
import Popup from 'reactjs-popup'

import Button from 'react-bootstrap/Button'
import UpdateBlog from './updateBlog'

const Demo = (props) => {
    return(
    <>
    
    <Popup trigger={<Button varient="primary">Update BLog</Button>} position="right center">
      
      <UpdateBlog id={props.id} />
    </Popup>
    </>
    )
  };

  export default Demo
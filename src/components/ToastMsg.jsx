import React,{useState} from 'react'
import Toast from 'react-bootstrap/Toast'

const ToastMsg = (porps)=>{
    const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);
    return(
    <>
        
        <div
  aria-live="polite"
  aria-atomic="true"
  style={{
    position: 'relative',
    minHeight: '100px',
  }}
>
  <Toast show={showA} onClose={toggleShowA}
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
    }}
  >
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
      <strong className="mr-auto">Bootstrap</strong>
      <small>just now</small>
    </Toast.Header>
    <Toast.Body>See? Just like this.</Toast.Body>
  </Toast>
</div>
    </>)
}

export default ToastMsg
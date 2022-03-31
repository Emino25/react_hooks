import React, { useState } from 'react'
import "../cssComponet/Button.css"
import Modal from 'react-modal';
import { Rating } from 'react-simple-star-rating';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
function AddButton({HandleAdd}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // other logic
  }
  function closeModal() {
    setIsOpen(false);
  }
  const [form, setForm] = useState({
    name:"",
    img:"",
    description:""
  })
  const HandleChange = (e) => {
    setForm({...form,[e.target.name]:e.target.value})
  }
  const HandleSubmit = (e) => {
    e.preventDefault()
    HandleAdd({...form,rate:rating})
    setForm({
      name:"",
      img:"",
      
    })
    setRating(0)
    closeModal()
  }
  return (
    <div>
      <button className='b' onClick={openModal}>Add Movie</button>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       
        <button onClick={closeModal}>close</button>
        <form onSubmit={HandleSubmit}>
          <label htmlFor="">name</label><input type="text" name="name" id="" onChange={HandleChange} required/>
          <label htmlFor="">img</label><input type="url" name="img" id="" onChange={HandleChange} required/>
          <label htmlFor="">rate</label><Rating onClick={handleRating} ratingValue={rating} name="rate"/>
       <button>sumbit</button>
        </form>
      </Modal>
    </div>
  )
}

export default AddButton
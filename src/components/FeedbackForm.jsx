
import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Card from "./shared/Card";
import Button from "./shared/button";


function FeedbackForm() {
  const [text, setText]= useState('')
  const [rating, setRating]= useState(10)
  const [btnDisabled, setbtnDisabled]= useState(true)
  const [message, setMessage]= useState('')

  //event listener for input value
  const handleTextChange= (e) =>{
    if (text === ' '){
      setbtnDisabled(true)
      setMessage(null)
    }else if (text !== '' && text.trim().length <=10){
      setMessage('Text must be at least 10 characters')
      setbtnDisabled(true)
    }else{
      setbtnDisabled(false)
      setMessage(null)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      console.log(newFeedback)
    }

  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm;

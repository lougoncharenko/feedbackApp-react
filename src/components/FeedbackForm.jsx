
import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/button";


function FeedbackForm() {
  const [text, setText]= useState('')
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
  return (
    <Card>
      <form>
        <h2> How would you rate your service with us?</h2>

        {/*todo- rating select component */}
        <div className="input-group">
        <input onChange={handleTextChange} type="text" 
        placeholder="write a review" 
        value={text}
        />
        <Button type="submit" 
        isDisabled={btnDisabled}
        version='secondary'>Send</Button>

        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;

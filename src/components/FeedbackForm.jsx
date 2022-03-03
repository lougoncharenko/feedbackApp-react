
import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/button";


function FeedbackForm() {
  const [text, setText]= useState('')

  //event listener for input value
  const handleTextChange= (e) =>{
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
        <Button type="submit" version='secondary'>Send</Button>

        </div>
        
      </form>
    </Card>
  );
}

export default FeedbackForm;

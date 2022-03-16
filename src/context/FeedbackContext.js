import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from "react";

const FeedbackContext = createContext()

//create a provider

export const FeedbackProvider= ({children}) => {
    const[feedback, setFeedback] = useState([
        {
           id:1,
           text: 'This item is from context',
           rating: 10
        }
    ])

    // moving functions into context
    const deleteFeedback= (id) => {
        if(window.confirm('Are you sure you want to delete?')){
           setFeedback(feedback.filter((item) => item.id !== id))
           //filter loops through with a condition what to filter out
        }
    }

    const addFeedback= (newFeedback) => {
        newFeedback.id=uuidv4()
       setFeedback([newFeedback,...feedback]) //using spread operator to create a new array
     
     }

    return (
        <FeedbackContext.Provider 
        value={{
          feedback,
          deleteFeedback,
          addFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )  
}

export default FeedbackContext
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'


//catching functions and handles
function FeedbackList({feedback, handleDelete}) {
    console.log(feedback)

    if(!feedback || feedback.length ===0){
        return <p>No Feedback Yet</p>
    }

    //passing functions and props
  return <div className="feedback-list">
      {feedback.map((item) => (
          <FeedbackItem 
          key= {item.id} 
          item={item} 
          handleDelete= {handleDelete} />
      ))}
  </div>
  
}

FeedbackList.propTypes= {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,

        })
    )
}

export default FeedbackList;

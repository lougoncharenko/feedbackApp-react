
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import {useState} from 'react'
import Header from "./components/header"
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import {FeedbackProvider} from './context/FeedbackContext'

function App(){
  //no longer need below line of code because of context
//  const [feedback, setFeedback]= useState(FeedbackData)

  return  (
    <FeedbackProvider>
      <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            exact path='/'
            element={
              <>
                 <FeedbackForm />
                 <FeedbackStats />
                 <FeedbackList />
              </>
            }
          ></Route>
            

          <Route path='/about' element={<AboutPage />} />
        </Routes>

        <AboutIconLink />

      </div>
    </Router>

    </FeedbackProvider>
  )
}

export default App

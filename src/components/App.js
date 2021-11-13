import React from "react"
import Signup from "./Signup"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import Dashboard from "./Dashboard"
import Login from "./Login"
import LandingPage from './LandingPage'
// import Profile from './Profile'
import Navbar from './Navbar'
import ozoneLogo from '../images/logo.png'
import Text from '../images/text.png'
import Gradient from '../images/gradient.png'
import Crop from '../images/crop.png'
import Comment from '../images/comment.png'
import Autocorrect from '../images/autocorrect.png'
import Folder from '../images/folder.png'
import ProfileImage from '../images/profile.png'
import VidBackground from '../images/video.png'

function App() {
  return (
        <Router>
          <Navbar logo={ozoneLogo} profileImage={ProfileImage} gradient={Gradient}  autocorrect={Autocorrect} text={Text} crop={Crop} comment={Comment} folder={Folder} />
            <Switch>
            <Route path="/" exact>
                <LandingPage videoBG={VidBackground} />
              </Route>
              <Route path="/signup" exact>
                <Signup/>
              </Route>
              <Route path="/login" exact>
                <Login/>
              </Route>

            </Switch>
        </Router>
  )
}

export default App

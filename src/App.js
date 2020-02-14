import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import LoginPage from './components/Login/Login';
import {Route} from 'react-router-dom';
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }
    
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' 
            render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?' 
            render={() => <ProfileContainer />} />
          <Route path='/users' 
            render={() => <UsersContainer />} />
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/login' 
            render={() => <LoginPage />} />
        </div>
      </div>
    
  );
  }
  
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);
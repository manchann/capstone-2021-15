// import './App.css';
import React from "react";
// import Carousel from "./components/CardCarousel";
// import Recommand from "./components/Recommand";
import Auth from './hoc/auth'
import MainPage from "./views/MainPage/MainPage"
import Category from "./Category";
import LoginPage from './views/LoginPage/LoginPage'
import SignUpPage from './views/SignUpPage/SignUpPage'
import WelcomePage from './views/WelcomePage/WelcomePage'
import { Route, BrowserRouter as Router} from "react-router-dom"

function App() {
    // const cardMargin = {
    //     marginBottom: "60px"
    // }

    return (
        <Router>
            <div className="App" style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
                
                {/*<Route path="/product" component={Product}/>*/}
                {/*<Route path="/mypage" component={Mypage}/>*/}
                <Route exact path="/category" component={Category}/>
                <Route exact path="/" component={Auth(WelcomePage, null)}/>
                <Route exact path="/login" component={Auth(LoginPage, false)}/>
                <Route exact path="/signup" component={Auth(SignUpPage, false)}/>
                <Route exact path="/main" component={Auth(MainPage, true)}/>
            </div>
        </Router>
    );
}

export default App;
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Post from './components/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import PostDetail from './components/PostDetail/PostDetail';
import Footer from './components/Footer/Footer';

function App() {
  return (

    <React.Fragment>
      <CssBaseline />
        <Container maxWidth="lg">
          <Typography component="div" style={{ backgroundColor: '#cfe8fc' }} >
            <Header></Header>
            <Router>
              <Switch>
                <Route path="/home">
                  <Post></Post>
                </Route>
                <Route path="/postDetail/:postId">
                  <PostDetail></PostDetail>
                </Route>
                <Route exact path="/">
                  <Post></Post>
                </Route>
                <Route path="*">
                    <NotFound></NotFound>
                </Route>
              </Switch>
            </Router>
            <Footer></Footer>
          </Typography>  
        </Container>
    </React.Fragment>
  );
}

export default App;

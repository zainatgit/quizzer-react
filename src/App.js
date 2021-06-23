import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import QuestionPage from './components/QuestionPage';
import CreateQuiz from './components/CreateQuiz';


function App() {

 // this.configVar = new Configuration();
 
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path={`/`} component={Home}></Route>
        <Route path={`/topics/:topicId`} component={QuestionPage}></Route>
        <Route path={`/create`} component={CreateQuiz}></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

import React from 'react';
import Home from './compoments/page/home/Home';
import About from './compoments/page/about/About';
import Contact from './compoments/page/contact/Contact';
import Header from './compoments/header/Header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <Header />
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {/* //<Route path="/topics" component={Topics} /> */}
          </div>
      </Router>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

// function Topic({ match }) {
//   return <h3>Requested Param: {match.params.id}</h3>;
// }

// function Topics({ match }) {
//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>

//       <Route path={`${match.path}/:id`} component={Topic} />
//       <Route
//         exact
//         path={match.path}
//         render={() => <h3>Please select a topic.</h3>}
//       />
//     </div>
//   );
// }



export default App;

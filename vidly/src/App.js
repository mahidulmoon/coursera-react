//import logo from './logo.svg';
import './App.css';
import {Redirect, Route,Switch} from 'react-router-dom';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import Navbar from './components/navBar';
import MovieForm from './components/movieForm'
function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/notfound" component={NotFound} />
          <Redirect from="/" to="/movies" />
          <Redirect to="/notfound" />
        </Switch>
      </main>
    </>
  );
}

export default App;

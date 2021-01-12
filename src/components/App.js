import { 
  BrowserRouter, 
  Route, 
  Switch 
} from 'react-router-dom';

//App components
import Header from './Header';
import MainOffer from './MainOffer';
import Menu from './Menu';
import Clients from './Clients';
import Orders from './Orders';
import NotFound from './NotFound';
import Cart from './Cart';
import DishCreateForm from './dishes/DishCreateForm';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/dish/new" component={DishCreateForm} />
        <Route exact path="/" component={Menu} />
        <Route path="/clients" component={Clients} />
        <Route path="/orders" component={Orders} />
        <Route path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

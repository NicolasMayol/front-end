import CajaBusqueda from './buscador/components/CajaBusqueda';
import './styles/style.scss';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ResBusqueda from './resBusqueda/components-rb/ResBusqueda';
import DetProd from './detProducto/components-dp/DetProd';

const App = () => {
    return (
        <Router>
            <Route path="/" component={CajaBusqueda} />
            <Route path="/items$search=:busqueda" exact component={ResBusqueda}/>
            <Route path="/items/:id" exact component={DetProd}/>
        </Router>
    );
};

export default App;
import{BrowserRouter,Route,Switch} from 'react-router-dom'
    
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Produtos from './pages/Produto'
import Erro from './pages/Erro'

const Routes = ()=>{
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/sobre' component={Sobre}/>
                    <Route exact path='/contato' component={Contato}/>
                    <Route exact path='/produtos/:id' component={Produtos}/>
                    <Route exact path='*' component={Erro}/>
                    </Switch>
            </BrowserRouter>
        </div>
    )
}
export default Routes
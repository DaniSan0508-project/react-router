import {Link} from 'react-router-dom'

export default function Erro(){
    return(
        <div>
            <h1>Hum ... parece que esse link não existe</h1>
            <h2>Você pode estar procurando <Link to='/sobre'>Sobre</Link></h2>
        </div>
        
    )

}
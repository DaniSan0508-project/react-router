import {useParams} from 'react-router-dom'

export default function Produtos(){
    let {id} = useParams()
    return(
        <div>
            <h1>Produto com id : {id}</h1>
        </div>

    )
}
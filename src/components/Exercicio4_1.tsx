import { Text, View } from "react-native"

export default function Exercicio4_1(){

    return(
        <Produto 
            nome={'Geladeira'} 
            preco={3000.55}
            emPromocao={false}/>
    )
}

type ProdutoProps = {
    nome: string,
    preco: number,
    emPromocao: boolean
}

function Produto(props: ProdutoProps){

    return(
        <View>
            <Text>Nome: {props.nome}</Text>
            <Text>Preço: R${props.preco.toFixed(2)}</Text>

            {
                props.emPromocao && <Text>Promoção de Black Friday</Text>
            }

        </View>
    )
}
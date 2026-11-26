import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Exercicio4_3(){
    const [exibindoDetalhe, setExibindoDetalhe] = useState<boolean>(false);

    return (
        <View>
            <Text>Geladeira</Text>

            {
                exibindoDetalhe
                &&
                <Text>Geladeira Consul 290L 110V</Text>    
            }

            <Pressable
                onPress={()=>setExibindoDetalhe((anterior)=> !anterior)}>
                <Text>
                    { exibindoDetalhe ? 'Ocultar Detalhe' : 'Mostrar Detalhe'}
                </Text>
            </Pressable>
        </View>
    )
}
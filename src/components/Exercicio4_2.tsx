import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function Exercicio4_2(){
    const [nome, setNome] = useState<string>('');

    return(
        <View>
            <TextInput 
                value={nome}
                onChangeText={setNome}/>

            <Text>Bem-vindo(a), {nome}!</Text>    
        </View>
    )
}
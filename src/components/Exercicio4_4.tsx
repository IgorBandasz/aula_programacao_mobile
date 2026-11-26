import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Exercicio4_4(){
    const [email, setEmail] = useState<string>('');

    const [erro, setErro] = useState<boolean>(false);
    const [validou, setValidou] = useState<boolean>(false);

    function validar(){
        setValidou(false);

        if(email.trim() === ''){
            setErro(true)
            return
        }
        if(!email.includes('@')){
            setErro(true)
            return
        }

        setErro(false);
        setValidou(true);
    }

    return (
        <View>
            <Text>E-mail</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                style={erro && styles.erro}/>
            {
                erro && <Text>Preencha um e-mail válido</Text>
            }
            
            {
                validou && <Text>E-mail válido</Text>
            }
            <Button 
                title="Validar"
                onPress={validar}/>    
        </View>
    )
}

const styles = StyleSheet.create({
    erro: {
        borderWidth: 2,
        borderColor: 'red'
    }
})
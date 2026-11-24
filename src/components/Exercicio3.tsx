import { useState } from "react";
import { Alert, Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Exercicio3() {
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confirmaSenha, setConfirmaSenha] = useState<string>('');

    const [senhaVisivel, setSenhaVisivel] = useState<boolean>(false);
    const [confirmaSenhaVisivel, setConfirmaSenhaVisivel] = useState<boolean>(false);

    function validarCampos(){
        if(nome.trim() === ''){
            //Erro
            return false
        }
        if(email.trim() === ''){
            //Erro
            return false
        }
        if(senha.trim().length < 6){
            //Erro
            return false
        }
        if(confirmaSenha.trim().length < 6){
            //Erro
            return false
        }
        if(senha != confirmaSenha){
            //Erro
            return false
        }

        return true
    }

    function cadastrar(){
        if(!validarCampos){
            return
        }

        Alert.alert('Campos válidos, irá cadastrar...')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo_campo}>Nome</Text>
            <TextInput
                value={nome}
                onChangeText={setNome}
                style={styles.campo_texto} />

            <Text style={styles.titulo_campo}>E-mail</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.campo_texto} />

            <Text style={styles.titulo_campo}>Senha</Text>
            <View style={styles.painel_senha}>
                <TextInput
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={!senhaVisivel}
                    style={[styles.campo_texto, styles.campo_senha]} />
                <Pressable
                    style={styles.botao_visualizar_senha}
                    onPress={() => { setSenhaVisivel((anterior) => !anterior) }}>
                    <Text style={styles.titulo_campo}>
                        {
                            senhaVisivel ?
                                '🙈​'
                                :
                                '👁️'
                        }
                    </Text>
                </Pressable>
            </View>

            <Text style={styles.titulo_campo}>Confirma senha</Text>
            <View style={styles.painel_senha}>
                <TextInput
                    value={confirmaSenha}
                    onChangeText={setConfirmaSenha}
                    secureTextEntry={!confirmaSenhaVisivel}
                    style={[styles.campo_texto, styles.campo_senha]} />
                <Pressable
                    style={styles.botao_visualizar_senha}
                    onPress={() => { setConfirmaSenhaVisivel((anterior) => !anterior) }}>
                    <Text style={styles.titulo_campo}>
                        {
                            confirmaSenhaVisivel ?
                                '🙈​'
                                :
                                '👁️'
                        }
                    </Text>
                </Pressable>
            </View>

            <Button
                title="Cadastrar"
                onPress={cadastrar}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titulo_campo: {
        fontSize: 20
    },
    campo_texto: {
        borderWidth: 2,
        borderRadius: 5,
        margin: 5,
    },
    painel_senha: {
        flexDirection: "row",
    },
    campo_senha: {
        flex: 1
    },
    botao_visualizar_senha: {
        justifyContent: 'center'
    }
})
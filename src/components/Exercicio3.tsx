import { useState } from "react";
import { Alert, Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Exercicio3() {
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confirmaSenha, setConfirmaSenha] = useState<string>('');

    const [senhaVisivel, setSenhaVisivel] = useState<boolean>(false);
    const [confirmaSenhaVisivel, setConfirmaSenhaVisivel] = useState<boolean>(false);

    const [erroVisivel, setErroVisivel] = useState<boolean>(false);

    const [erroNome, setErroNome] = useState<boolean>(false);
    const [erroEmail, setErroEmail] = useState<boolean>(false);
    const [erroSenha, setErroSenha] = useState<boolean>(false);
    const [erroConfirmaSenha, setErroConfirmaSenha] = useState<boolean>(false);


    function validarCampos(){
        setErroVisivel(true);

        setErroNome(false);
        setErroEmail(false);
        setErroSenha(false);
        setErroConfirmaSenha(false);

        if(nome.trim() === ''){
            //Erro
            setErroNome(true);
            return false
        }
        if(email.trim() === ''){
            //Erro
            setErroEmail(true);
            return false
        }
        if(senha.trim().length < 6){
            //Erro
            setErroSenha(true);
            return false
        }
        if(confirmaSenha.trim().length < 6){
            //Erro
            setErroConfirmaSenha(true)
            return false
        }
        if(senha != confirmaSenha){
            //Erro
            setErroConfirmaSenha(true)
            return false
        }

        return true
    }

    function cadastrar(){
        if(!validarCampos()){
            return
        }

        Alert.alert('Campos válidos, irá cadastrar...')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo_campo}>Nome</Text>
            <TextInput
                value={nome}
                onChangeText={(text)=>{setNome(text); setErroVisivel(false)}}
                style={[styles.campo_texto, (erroVisivel && erroNome) && styles.campo_erro]} />
            {
                (erroVisivel && erroNome) && <Text>Preencha o nome</Text>
            }

            <Text style={styles.titulo_campo}>E-mail</Text>
            <TextInput
                value={email}
                onChangeText={(text)=>{setEmail(text); setErroVisivel(false)}}
                keyboardType="email-address"
                autoCapitalize="none"
                style={[styles.campo_texto, (erroVisivel && erroEmail) && styles.campo_erro]} />
            {
                (erroVisivel && erroEmail) && <Text>Preencha o e-mail</Text>
            }    

            <Text style={styles.titulo_campo}>Senha</Text>
            <View style={styles.painel_senha}>
                <TextInput
                    value={senha}
                    onChangeText={(text)=>{setSenha(text); setErroVisivel(false)}}
                    secureTextEntry={!senhaVisivel}
                    style={[styles.campo_texto, styles.campo_senha, (erroVisivel && erroSenha) && styles.campo_erro]} />
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
            {
                (erroVisivel && erroSenha) && <Text>A senha deve conter 6 ou mais dígitos</Text>
            }

            <Text style={styles.titulo_campo}>Confirma senha</Text>
            <View style={styles.painel_senha}>
                <TextInput
                    value={confirmaSenha}
                    onChangeText={(text)=>{setConfirmaSenha(text); setErroVisivel(false)}}
                    secureTextEntry={!confirmaSenhaVisivel}
                    style={[styles.campo_texto, styles.campo_senha, (erroVisivel && erroConfirmaSenha) && styles.campo_erro]} />
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
            {
                (erroVisivel && erroConfirmaSenha) && <Text>As senhas não são iguais</Text>
            }

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
    },
    campo_erro: {
        borderColor: 'red',
        backgroundColor: '#fa9e9e'
    }
})
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';

export default function LoginScreen() {

    const[login, setLogin] = useState('');
    const[senha, setSenha] = useState('');

    function acessar() {
        alert(login);
        alert(senha);
    }


    return (
        <View style={styles.container}>
            {/* <View style={{ width: '90%', height: '20%', borderRadius: '100%', left: -20, top: 60, backgroundColor: 'white', position: 'absolute' }}></View>
            <View style={{ width: '90%', transform: 'rotate(90deg)', height: '20%', borderRadius: '100%', right: -100, top: 40, backgroundColor: 'white', position: 'absolute' }}></View> */}
            
            <View style={styles.box}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/icon.png')}
                />
                <Text>Login</Text>
                <TextInput style={styles.input} placeholder='Login' onChangeText={value => setLogin(value)}/>
                <TextInput style={styles.input} placeholder='Senha'  onChangeText={value => setSenha(value)}/>
                <Button
                    title="Acessar"
                    onPress={acessar}
                    color="#1F3DCE"
                    accessibilityLabel="Este botão faz o login"
                />
            </View>
            {/* <View style={{ width: '90%', transform: 'rotate(90deg)', height: '20%', borderRadius: '100%', left: -100, bottom: 40, backgroundColor: 'white', position: 'absolute' }}></View>
            <View style={{ width: '90%', height: '20%', borderRadius: '100%', right: -100, bottom: 60, backgroundColor: 'white', position: 'absolute' }}></View> */}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F3DCE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: 'white',
        width: '100%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100
    },
    input: {
        width: '90%',
        height: 40,
        backgroundColor: '#F7F7F7',
        color: '#333',
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        padding: 10
    },
    button: {
        borderRadius: 10
    }
});
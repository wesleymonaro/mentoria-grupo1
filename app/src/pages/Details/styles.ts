import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 12
    },
    foto: {
        width: Dimensions.get('screen').width - 24,
        height: 200
    },
    nome: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 12
    },
    descricao: {
        fontSize: 16,
        marginTop: 12
    },
    preco: {
        color: 'red',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 24
    },
    button: {
        width: 250,
        height: 50,
        borderRadius: 4,
        backgroundColor: '#009900',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 24
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export default styles;
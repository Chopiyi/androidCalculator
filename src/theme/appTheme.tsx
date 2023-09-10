import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: 'black',
        
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 20
    },
    calculatorContainer: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'flex-end'
    },
    smallResult: {
        color: 'rgba(255,255,255, 0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    row: {

        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10

    },
    button: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 6
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    }


});
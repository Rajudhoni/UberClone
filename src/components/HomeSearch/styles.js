import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#b0b0b0',
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,


    },
    inputText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#434343',
    },
    timeContainer: {
        width: 100,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#dbdbdb',

    },
    iconContainer: {
        backgroundColor: '#b3b3b3',
        padding: 10,
        borderRadius: 25,

    }, 
    destinationText: {
        marginLeft: 10,
        fontWeight: '500',
        fontSize: 16,
    }



});


export default styles;
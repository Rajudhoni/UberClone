import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


const index = () => {
    return (
        <View style={styles.container}>
            {/* Image */}
                <Image style={styles.image} source={require('../../assets/images/UberX.jpeg')} />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    UberX
                    <Ionicons name={'person'} size={14} />
                    3
                </Text>
                <Text style={styles.time}>
                    8:03PM drop off
                </Text>

            </View>
            <View style={styles.rightContainer}>
                 <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
                <Text style={styles.price}>
                    est. $27
                </Text>
            </View>
          

        </View>
    )
}

export default index

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 70,
        height: 80,
        resizeMode: 'contain',
    }, 
    middleContainer: {
        flex: 1,
        marginHorizontal: 10,
        
        
    }, 
    type: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    }, 
    time: {
        color: '#5d5d5d'
    }, 
    rightContainer: {
        width: 100,
        alignItems: 'flex-end',
        flexDirection: 'row'
    
    }, 
    price: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5,
    }

})

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UberTypeRow from  '../UberTypeRow';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const index = () => {
    return (
        <View style={styles.container}>
                 <UberTypeRow />
                


   

        </View>
    )
}

export default index

const styles = StyleSheet.create({
        container: {
            height: '100%',
            backgroundColor: '#ececec',
        }
})

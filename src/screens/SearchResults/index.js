import React from 'react'
import { View, Text } from 'react-native'
import HomeMap from '../../components/HomeMap';
import UberTypes from '../../components/UberTypes';
const index = () => {
    return (
        <View style={{marginTop: 40}}>
            <HomeMap/>
            <UberTypes />
        </View>
    )
}

export default index

import React from 'react';
import { View, Text } from 'react-native';
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';

const index = () => {
    return (
        <View>
            <HomeMap />
            

            {/* Covid messages */}
                <CovidMessage />

            {/* Button  Comp */}
                <HomeSearch/>

            
        </View>
    );
};

export default index;

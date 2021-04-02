import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';


const index = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text}>Alternatively you may use the synchronous method Icon.getImageSourceSync to avoid rendering glitches.</Text>
            <Text style={styles.learnMore}>Learn More...<AntDesign name={'arrowright'} size={16}/></Text>
        </View>
    );
};

export default index;

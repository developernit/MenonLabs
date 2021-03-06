import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

Header.defaultProps = {
    title: 'CommonLit',
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'purple',
    },
    text: {
        color: 'white',
        fontSize: 23,
        textAlign: 'center',
    },
});

export default Header;
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Awardee extends Component {

    constructor(props) {
        super(props)
    }

    render({ person } = this.props) {
        return (
            <View style={styles.awardeeMain}>
                <Text style={styles.name}>{person.fullName ? person.fullName.en : person.orgName.en}</Text>
                <Text>{person.motivation.en[0].toUpperCase() + person.motivation.en.slice(1)}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    awardeeMain: {
        marginTop: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 5
    }
})
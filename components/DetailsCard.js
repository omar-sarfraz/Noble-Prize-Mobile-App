import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Awardee from './awardee'

class DetailsCard extends Component {

    constructor(props) {
        super(props)
    }

    render({ demo } = this.props) {
        return (
            <View style={styles.cardMain}>
                <View style={styles.header}>
                    <Text style={styles.cardTitle}>{demo.categoryFullName.en}</Text>
                    <Text style={styles.year}>{demo.awardYear}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.contentTitle}>Awarded To:</Text>
                    <Awardee />
                </View>
            </View>
        );
    }

}

export default DetailsCard;

const styles = StyleSheet.create({
    cardMain: {
        backgroundColor: "#D4F1F4",
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    },
    header: {
        flexDirection: "row",
        backgroundColor: "#189AB4",
        borderRadius: 4,
        padding: 5,
        alignItems: "center",
        justifyContent: "space-between"
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff"
    },
    year: {
        backgroundColor: "#189AB4",
        borderRadius: 5,
        fontWeight: "bold",
        backgroundColor: "#fff",
        padding: 3
    },
    content: {
        marginTop: 20,
        padding: 5,
    },
    contentTitle: {
        fontSize: 15,
        fontWeight: "bold"
    }
})
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Awardee from './awardee'

class DetailsCard extends Component {

    constructor(props) {
        super(props)
    }

    render({ noblePrize } = this.props) {
        return (
            <View style={styles.cardOuter}>
                <View style={styles.header}>
                    <Text style={styles.cardTitle}>{noblePrize.categoryFullName.en}</Text>
                    <Text style={styles.year}>{noblePrize.awardYear}</Text>
                </View>
                <View style={styles.cardMain}>
                    <View style={styles.content}>
                        <Text style={styles.contentTitle}>Awarded To:</Text>
                        {noblePrize.laureates.map((item) => <Awardee key={item.id} person={item} />)}
                    </View>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.year}>{noblePrize.category.en}</Text>
                </View>
            </View>
        );
    }

}

export default DetailsCard;

const styles = StyleSheet.create({
    cardOuter: {
        backgroundColor: "#D4F1F4",
        borderRadius: 5,
        marginTop: 10
    },
    cardMain: {
        padding: 10,
        borderRadius: 5,
    },
    header: {
        flexDirection: "row",
        backgroundColor: "#189AB4",
        borderRadius: 5,
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
        padding: 3,
        paddingHorizontal: 7
    },
    content: {
        padding: 5,
    },
    contentTitle: {
        fontSize: 20,
        fontWeight: "600"
    },
    bottom: {
        alignItems: "flex-end",
        padding: 5
    }
})
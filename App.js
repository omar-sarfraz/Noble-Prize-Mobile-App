import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DetailsCard from './components/DetailsCard';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      // noblePrizeList: []
      demoNoblePrize: {
        awardYear: "1901",
        category: {
          en: "Chemistry",
        },
        categoryFullName: {
          en: "The Nobel Prize in Chemistry",
        },
        prizeAmount: 150782,
        prizeAmountAdjusted: 8722510,
        laureates: [
          {
            id: "160",
            fullName: {
              en: "Jacobus Henricus van 't Hoff"
            },
            motivation: {
              en: "in recognition of the extraordinary services he has rendered by the discovery of the laws of chemical dynamics and osmotic pressure in solutions",
            }
          },
          {
            id: "161",
            fullName: {
              en: "ABC"
            },
            motivation: {
              en: "in recognition of the extraordinary services he has rendered by the discovery of the laws of chemical dynamics and osmotic pressure in solutions",
            }
          }
        ]
      }
    }

    // fetch("https://api.nobelprize.org/2.1/nobelPrizes")
    //   .then((response) => response.json())
    //   .then((data) => this.setState({ noblePrizeList: data.nobelPrizes }))

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Noble Prize Details</Text>
        <DetailsCard demo={this.state.demoNoblePrize} />
        {/* {this.state.noblePrizeList.map((item) => <DetailsCard text={item.category.en} />)} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    paddingTop: StatusBar.currentHeight
  },
  heading: {
    fontSize: 25,
    fontWeight: "500",
    marginTop: 25,
    marginBottom: 10
  }
});

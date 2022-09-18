import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, ScrollView } from 'react-native';
import DetailsCard from './components/DetailsCard';

export default class App extends Component {

  constructor() {
    super();
    this.fetchData()

    this.state = {
      noblePrizeList: [],
      loading: true
    }

  }

  fetchData() {
    let data = fetch("https://api.nobelprize.org/2.1/nobelPrizes")
      .then((response) => response.json())
      .then((data) => this.setState({ noblePrizeList: data.nobelPrizes, loading: false }))
    return data
  }

  render() {
    return (
      this.state.loading ?
        <View>
          <Text>Loading...</Text>
        </View>
        :
        <View style={styles.container}>
          <Text style={styles.heading}>Noble Prize Details</Text>
          {/* <ScrollView>
            {this.state.noblePrizeList.map((item, index) => <DetailsCard noblePrize={item} key={index} />)}
          </ScrollView> */}
          <FlatList
            data={this.state.noblePrizeList}
            renderItem={({ item }) => <DetailsCard noblePrize={item} />}
            keyExtractor={({ item }) => item.laureates[0].id}
          />
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

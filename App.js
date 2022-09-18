import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, ScrollView, Pressable } from 'react-native';
import DetailsCard from './components/DetailsCard';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      noblePrizeList: [],
      loading: true,
      offset: 0
    }

    this.fetchData()
  }

  fetchData() {
    let data = fetch(`https://api.nobelprize.org/2.1/nobelPrizes?offset=${this.state.offset}`)
      .then((response) => response.json())
      .then((data) => this.setState({ noblePrizeList: data.nobelPrizes, loading: false }))
    return data
  }

  onNext() {
    this.setState((state) => ({ loading: true, offset: state.offset + 25 }))
    this.fetchData()
  }

  onPrev() {
    this.setState((state) => ({ loading: true, offset: state.offset - 25 }))
    this.fetchData()
  }

  render() {
    return (
      this.state.loading ?
        <View style={styles.loadingMain}>
          <Text style={styles.loadingText}>Loading...</Text>
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
            keyExtractor={(item) => item.laureates[0].id}
          />
          <View style={styles.footer}>
            {this.state.offset ?
              <Pressable onPress={() => this.onPrev()}>
                <Text style={styles.button}>Previous</Text>
              </Pressable>
              :
              null
            }
            <Pressable onPress={() => this.onNext}>
              <Text style={styles.button}>Next</Text>
            </Pressable>
          </View>
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
  },
  loadingMain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loadingText: {
    fontSize: 30,
  },
  footer: {
    backgroundColor: "#189AB4",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    paddingHorizontal: 7,
    paddingVertical: 5,
    backgroundColor: "#fff",
    fontWeight: "bold",
    borderRadius: 5
  }
});

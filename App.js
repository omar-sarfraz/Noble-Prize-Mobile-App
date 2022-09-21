import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import DetailsCard from './components/DetailsCard';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      noblePrizeList: [],
      loading: true,
      offset: 0,
      disableNext: false
    }

    this.fetchData()
  }

  componentDidUpdate() {
    this.fetchData()
  }

  fetchData() {
    let data = fetch(`https://api.nobelprize.org/2.1/nobelPrizes?offset=${this.state.offset}`)
      .then((response) => response.json())
      .then(resp => {
        for (let i = 0; i < 25; i++) {
          resp.nobelPrizes[i].id = i
        }
        return resp
      })
      .then((data) => this.setState({ noblePrizeList: data.nobelPrizes, loading: false, disableNext: this.state.offset === 625 ? true : false }))
    return data
  }

  onNext() {
    this.setState((state) => ({ loading: true, offset: state.offset + 25 }))
  }

  onPrev() {
    this.setState((state) => ({ loading: true, offset: state.offset - 25 }))
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
            keyExtractor={(item) => item.id}
          />
          <View style={styles.footer}>
            {this.state.offset ?
              <TouchableOpacity onPress={() => this.onPrev()}>
                <Text style={styles.button}>Previous</Text>
              </TouchableOpacity>
              :
              <View></View>
            }
            <TouchableOpacity onPress={() => this.onNext()} disabled={this.state.disableNext} style={{ opacity: this.state.disableNext ? 0.4 : 1 }}>
              <Text style={styles.button}>Next</Text>
            </TouchableOpacity>
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
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    borderRadius: 5
  }
});

import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";

// import icons
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Home = ({ navigation }) => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const HomeItems = () => {
    const renderHomeItems = ({ item }) => {
      return (
        <View style={styles.container}>
          {/* card container below */}
          <View style={styles.cardContainer}>
            <View style={styles.cardContainerTitle}>
              <Text style={styles.cardContainerTitleText}>{item.title}</Text>
            </View>

            <View style={styles.cardItemWrapper}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Details", {
                    itemId: item.id,
                    itemCategory: item.category,
                    itemTitle: item.title,
                    itemImage: item.image,
                    itemPrice: item.price,
                    itemDescription: item.description,
                    itemRating: item.rating.rate,
                    itemCount: item.rating.count,
                  })
                }
              >
                <View style={styles.cardItemContainer}>
                  <View style={styles.cardItemsWrapper}>
                    <View style={styles.cardItemImage}>
                      <Image
                        style={styles.cardItemBackground}
                        source={{ uri: item.image }}
                      />

                      {/* <Text style={styles.cardItemRating}>{item.rating}</Text> */}
                    </View>
                    <View style={styles.cardItemContent}>
                      <View style={styles.cardItemTop}>
                        <Text style={styles.cardItemPrice}>R {item.price}</Text>
                        <View style={styles.ratingContainer}>
                          <View style={styles.starWrapper}>
                            <FontAwesome
                              name="star"
                              size={22}
                              color="gold"
                              style={styles.star}
                            />
                            <Text style={styles.ratingText}>
                              {item.rating.rate}
                            </Text>
                          </View>
                        </View>
                        {/* <Entypo name="heart" size={23} color="#DDD" /> */}
                      </View>
                      <View style={styles.cardItemBottom}>
                        <Text
                          style={styles.cardItemDescription}
                          numberOfLines={3}
                        >
                          {item.description}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };

    return (
      <View>
        <FlatList
          data={Data}
          renderItem={renderHomeItems}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  };

  if (!Data) {
    return (
      <SafeAreaView>
        <View style={{ display: "flex", justifyContent: "center" }}>
          <Text
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontSize: 23,
            }}
          >
            Loading...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
      }}
    >
      <HomeItems />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  searchContainer: {
    padding: 20,
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  searchInput: {
    height: 40,
    width: 330,
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 5,
    placeholderTextColor: "gray",
    paddingLeft: 14,
  },
  search: {
    // position: "absolute",
    // padding: 30,
  },
  searchIcon: {
    paddingRight: 16,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 20,
    borderColor: "#CCC",
    borderWidth: 1,
    width: "95%",
    borderRadius: 4,
  },
  cardContainer: {
    // display: "flex",
    flexDirection: "column",
    // alignItems: "flex-start",
    alignItems: "center",
  },
  cardContainerTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // padding: 26,
  },
  cardContainerTitleText: {
    fontSize: 18,
    fontWeight: "bold",
    maxWidth: 245,
    textAlign: "center",
  },
  cardContainerSeeAllTitle: {
    fontSize: 13,
  },
  cardItemWrapper: {
    alignItems: "center",
    minWidth: 300,
    minHeight: 300,
    // flexWrap: "wrap",
  },
  cardItemContainer: {
    display: "flex",
    paddingVertical: 20,
  },
  cardItemsWrapper: {
    height: 320,
    width: 195,
    borderRadius: 8,
    alingItems: "center",
  },
  cardItemImage: {
    height: 220,
    width: 180,
    backgroundColor: "#CCC",
    borderRadius: 8,
    alignItems: "center",
  },
  cardItemRating: {
    position: "absolute",
    width: 10,
    height: 10,
    backgroundColor: "#E4204C",
    color: "white",
  },
  cardItemBackground: {
    height: 220,
    width: 180,
    borderRadius: 8,
  },
  cardItemContent: {
    padding: 2,
    paddingTop: 8,
  },
  cardItemTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 170,
  },
  cardItemPrice: {
    fontSize: 17,
    fontWeight: "600",
  },
  cardItemBottom: {
    display: "flex",
    flexDirection: "row",
    width: 186,
  },
  cardItemDescription: {
    fontSize: 13,
    paddingTop: 4,
  },
  ratingContainer: {},
  ratingText: {},
  starWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  star: {
    marginRight: 6,
  },
  buttonContainer: {
    display: "flex",
    backgroundColor: "#E4204C",
    padding: 8,
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    alignItems: "center",
    textAlign: "center",
    fontSize: 18,
  },
});

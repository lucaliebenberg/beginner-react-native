import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

// import icons
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Details = ({ navigation }) => {
  const route = useRoute();

  const itemId = route.params.itemId;
  const itemTitle = route.params.itemTitle;
  const itemPrice = route.params.itemPrice;
  const itemImage = route.params.itemImage;
  const itemDescription = route.params.itemDescription;

  const handlePress = () => {
    Alert.alert(
      "Added to cart",
      "Your item has been added to your cart",
      [
        {
          text: "Dismiss",
          style: "default",
        },
        {
          text: "Go to cart",
          style: "cancel",
          onPress: () => {
            navigation.navigate("Cart");
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={styles.headerIcon}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={26} color="black" />
            </TouchableOpacity>
          </View>
          {/* <Text style={styles.headerText}>Details</Text> */}
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: itemImage }} style={styles.image} />
        </View>
        <View style={styles.detailsTopContainer}>
          <View style={styles.detailsTitleWrapper}>
            <Text style={styles.detailsTitle}>{itemTitle}</Text>
            <View style={styles.detailsIcon}>
              <Entypo name="heart" size={32} color="#DDD" />
            </View>
          </View>
        </View>
        <View style={styles.detailsBottomContainer}>
          <View style={styles.starWrapper}>
            <FontAwesome
              name="star"
              size={22}
              color="gold"
              style={styles.star}
            />

            <Text style={styles.starText}>4.0</Text>
          </View>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>R {itemPrice}</Text>
          </View>
        </View>
        <View style={styles.detailsDescriptionContainer}>
          <Text style={styles.detailsDescription}>{itemDescription}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{ width: "100%", height: "100%", alignItems: "center" }}
            onPress={handlePress}
          >
            <View style={styles.buttonWrapper}>
              <Button title="Add to cart" color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    paddingBottom: 20,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  headerIcon: {},
  headerText: {
    fontSize: 22,
    alignItems: "center",
    fontWeight: "bold",
    // paddingLeft: 30,
    // marginLeft: 92,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 520,
    width: 360,
    borderRadius: 10,
  },
  detailsTopContainer: {},
  detailsTitleWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    maxWidth: 320,
    padding: 30,
  },
  detailsIconWrapper: {},
  detailsIcon: {
    padding: 30,
  },
  detailsBottomContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // padding: 30,
    paddingLeft: 30,
  },
  starWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  star: {
    marginRight: 6,
  },
  starText: {
    fontSize: 18,
    paddingTop: 2.5,
    marginLeft: 4,
  },
  priceWrapper: {
    paddingRight: 30,
  },
  price: {
    fontWeight: "600",
    fontSize: 18,
  },
  detailsDescriptionContainer: {
    padding: 30,
  },
  detailsDescription: {
    width: "100%",
    fontSize: 18,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWrapper: {
    backgroundColor: "#E4204C",
    color: "white",
    borderRadius: 10,
    width: "90%",
    padding: 4,
    marginBottom: 8,
  },
});

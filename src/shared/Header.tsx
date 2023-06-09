import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import { StatusBar } from "react-native";
import { useAppSelector } from "../hooks";

const Header = ({ title }: HeaderProps) => {
  // `state` will be correctly typed, thanks to our custom hook
  const locations = useAppSelector((state) => state.meetups);

  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.header}
    >
      <View style={styles.headerTitle}>
        <FontAwesome name="meetup" size={24} color="black" />
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.favoriteContainer}>
        <FontAwesome name="heart" size={24} color="red" />
        <Text>:</Text>
        <Text>
          {locations.reduce((count, location) => {
            if (location.favorite) {
              return count + 1;
            }
            return count;
          }, 0)}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    marginTop: StatusBar.currentHeight,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontFamily: "pacifico-regular",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
  favoriteContainer: {
    flexDirection: "row",
  },
});

type HeaderProps = {
  title: string;
};

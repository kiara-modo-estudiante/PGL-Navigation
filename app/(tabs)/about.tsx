import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../../components/Card";
import { globalStyles } from "../../theme/styles";
import { aboutMeCard } from "../../data/about";
import List from "../../components/List";

export default function About() {
  return (
    <View style={globalStyles.body}>
      <Card
        title={aboutMeCard.title}
        imageSource={aboutMeCard.image}
        bodyText={aboutMeCard.description}
      />
      <List />
    </View>
  );
}

const styles = StyleSheet.create({});

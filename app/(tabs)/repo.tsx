import React from "react";
import { StyleSheet, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { globalStyles } from "../../theme/styles";
import { githubLink } from "../../data/socials";

const Repo = () => {
  return (
    <View style={globalStyles.body}>
      <View style={styles.qrCode}>
        <QRCode value={githubLink} />
      </View>
    </View>
  );
};

export default Repo;

const styles = StyleSheet.create({
  qrCode: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});

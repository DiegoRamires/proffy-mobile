import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";
import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";
import { RectButton } from "react-native-gesture-handler";

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://github.com/diegoramires.png" }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Diego</Text>
          <Text style={styles.subject}>Portugês</Text>
        </View>
      </View>

      <Text style={styles.bio}>Professor fullstack</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Price/Hour {"   "}
          <Text style={styles.priceValue}>R$ 100,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={styles.favoriteButton}>
            <Image source={heartOutlineIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon}></Image>
            <Text style={styles.contactButtonText}>Entrar em Contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;

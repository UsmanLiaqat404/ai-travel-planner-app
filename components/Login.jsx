import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export default function Login() {
  return (
    <View>
      <Image
        source={require("@/assets/images/login.jpg")}
        style={{
          width: "100%",
          height: 520,
        }}
      />

      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          AI Travel Planner
        </Text>

        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 16,
            textAlign: "center",
            color: Colors.GRAY,
          }}
        >
          Discover your next adventure effortlessly. Personalized itineraries at
          your fingertips. Travel smarter with AI-driven insights.
        </Text>

        <View style={styles.button}>
          <Text
            style={{
              color: Colors.WHITE,
              fontFamily: "outfit-bold",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Get Started
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
  },

  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: "20%",
  },
});

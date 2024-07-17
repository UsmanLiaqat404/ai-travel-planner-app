import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <View
      style={{
        padding: 24,
        paddingTop: 80,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        Create New Account
      </Text>

      {/* Full Name */}
      <View
        style={{
          marginTop: 40,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Full Name
        </Text>
        <TextInput placeholder="Enter Full Name" style={styles.input} />
      </View>

      {/* Email */}
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Email
        </Text>
        <TextInput
          type="email"
          placeholder="Enter Email"
          style={styles.input}
        />
      </View>

      {/* Password */}
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Password
        </Text>
        <TextInput
          type="password"
          secureTextEntry={true}
          placeholder="Enter Password"
          style={styles.input}
        />
      </View>

      {/* Create Account Button */}
      <TouchableOpacity
        style={{
          backgroundColor: Colors.PRIMARY,
          marginTop: 40,
          padding: 10,
          borderRadius: 5,
          marginTop: 20,
          alignItems: "center",
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
            color: Colors.WHITE,
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity
        onPress={() => router.push("/auth/sign-in")}
        style={{
          backgroundColor: Colors.WHITE,
          marginTop: 20,
          padding: 10,
          borderRadius: 5,
          alignItems: "center",
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
            color: Colors.PRIMARY,
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: Colors.GRAY,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 4,
    fontFamily: "outfit",
  },
});

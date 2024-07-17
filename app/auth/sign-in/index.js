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
        Let's Sign You In
      </Text>

      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 20,
          color: Colors.GRAY,
          textAlign: "center",
        }}
      >
        Welcome Back!
      </Text>

      {/* Email */}
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

      {/* Sign In Button */}
      <TouchableOpacity
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 10,
          borderRadius: 5,
          marginTop: 40,
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
          Sign In
        </Text>
      </TouchableOpacity>

      {/* Create Account Button */}
      <TouchableOpacity
        onPress={() => router.replace("/auth/sign-up")}
        style={{
          backgroundColor: Colors.WHITE,
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
            color: Colors.PRIMARY,
          }}
        >
          Create Account
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

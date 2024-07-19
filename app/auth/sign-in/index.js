import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configs/FirebaseConfig";

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const onSignIn = () => {
    if (!email || !password) {
      ToastAndroid.show("Please fill all fields", ToastAndroid.LONG);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        // Redirect to home
        router.replace("/");

        ToastAndroid.show("Signed in successfully", ToastAndroid.LONG);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        if (errorCode === "auth/invalid-credential") {
          ToastAndroid.show("Invalid Email or Password", ToastAndroid.LONG);
        } else if (errorCode === "auth/too-many-requests") {
          ToastAndroid.show(
            "Too many requests. Try again later",
            ToastAndroid.LONG
          );
        }
      });
  };

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
          placeholder="Enter Email"
          onChangeText={(text) => setEmail(text)}
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
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
        />
      </View>

      {/* Sign In Button */}
      <TouchableOpacity
        onPress={onSignIn}
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 14,
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
          padding: 14,
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
    borderColor: Colors.GRAY,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 4,
    fontFamily: "outfit",
  },
});

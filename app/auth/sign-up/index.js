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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configs/FirebaseConfig";

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const onCreateAccount = () => {
    if (!fullName || !email || !password) {
      ToastAndroid.show("Please fill all fields", ToastAndroid.LONG);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);

        // Update user profile
        user.updateProfile({
          displayName: fullName,
        });

        // Redirect to home
        router.replace("/");

        ToastAndroid.show("Account created successfully", ToastAndroid.LONG);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        if (errorCode === "auth/email-already-in-use") {
          ToastAndroid.show("Email already in use", ToastAndroid.LONG);
        } else if (errorCode === "auth/weak-password") {
          ToastAndroid.show("Weak password", ToastAndroid.LONG);
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
        <TextInput
          placeholder="Enter Full Name"
          onChangeText={(text) => setFullName(text)}
          style={styles.input}
        />
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

      {/* Create Account Button */}
      <TouchableOpacity
        onPress={onCreateAccount}
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
          Create Account
        </Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity
        onPress={() => router.replace("/auth/sign-in")}
        style={{
          backgroundColor: Colors.WHITE,
          marginTop: 20,
          padding: 14,
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
    borderColor: Colors.GRAY,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 4,
    fontFamily: "outfit",
  },
});

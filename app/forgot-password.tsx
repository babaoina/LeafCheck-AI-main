import { AuthButton } from "@/components/auth-button";
import { CustomTextInput } from "@/components/custom-text-input";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSendOTP = () => {
    // Hardcoded navigation to OTP verification screen with email as param
    router.push(`/otp-verification?email=${encodeURIComponent(email)}`);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      {/* Back arrow */}
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      {/* Lock icon placeholder */}
      <View style={styles.lockContainer}>
        <Text style={styles.lockIcon}>🔒</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Forgot Password</Text>

      {/* Email Input */}
      <CustomTextInput
        label="Enter Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email address"
        keyboardType="email-address"
        autoCapitalize="none"
        returnKeyType="done"
      />

      {/* Send OTP Button */}
      <AuthButton title="Send OTP" onPress={handleSendOTP} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 24,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 24,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  backArrow: {
    fontSize: 24,
    color: "#2E7D32",
  },
  lockContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#8D6E63",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
  lockIcon: {
    fontSize: 40,
    color: "#FFFFFF",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2E7D32",
    textAlign: "center",
    marginBottom: 32,
  },
});

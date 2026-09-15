import { AuthButton } from "@/components/auth-button";
import { CustomTextInput } from "@/components/custom-text-input";
import { LeafCheckLogo } from "@/components/leaf-check-logo";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    // Hardcoded navigation to home screen
    router.replace("/");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <LeafCheckLogo size={120} />

      {/* Title */}
      <Text style={styles.title}>Sign up</Text>

      {/* Email Input */}
      <CustomTextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        returnKeyType="next"
      />

      {/* First Name Input */}
      <CustomTextInput
        label="First Name"
        value={firstName}
        onChangeText={setFirstName}
        placeholder="Enter your first name"
        autoCapitalize="words"
        returnKeyType="next"
      />

      {/* Last Name Input */}
      <CustomTextInput
        label="Last Name"
        value={lastName}
        onChangeText={setLastName}
        placeholder="Enter your last name"
        autoCapitalize="words"
        returnKeyType="next"
      />

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <CustomTextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Create a password"
          secureTextEntry={!showPassword}
          returnKeyType="next"
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.passwordToggle}
        >
          <Text style={styles.passwordToggleText}>
            {showPassword ? "Hide" : "Show"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Confirm Password Input */}
      <View style={styles.passwordContainer}>
        <CustomTextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm your password"
          secureTextEntry={!showConfirmPassword}
          returnKeyType="done"
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          style={styles.passwordToggle}
        >
          <Text style={styles.passwordToggleText}>
            {showConfirmPassword ? "Hide" : "Show"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Register Button */}
      <AuthButton title="Register" onPress={handleRegister} />

      {/* Login Link */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginLink}>Log in</Text>
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2E7D32",
    textAlign: "center",
    marginBottom: 32,
  },
  passwordContainer: {
    position: "relative",
  },
  passwordToggle: {
    position: "absolute",
    right: 12,
    top: 40,
    paddingVertical: 8,
  },
  passwordToggleText: {
    fontSize: 14,
    color: "#4CAF50",
    fontWeight: "500",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  loginText: {
    fontSize: 16,
    color: "#757575",
  },
  loginLink: {
    fontSize: 16,
    color: "#4CAF50",
    fontWeight: "600",
  },
});

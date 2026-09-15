import { AuthButton } from "@/components/auth-button";
import { CustomTextInput } from "@/components/custom-text-input";
import { LeafCheckLogo } from "@/components/leaf-check-logo";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Hardcoded navigation to home screen
    router.replace("/");
  };

  const handleForgotPassword = () => {
    router.push("/forgot-password");
  };

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <View style={styles.container}>
      {/* Logo - wrapped for horizontal centering */}
      <View style={styles.logoContainer}>
        <LeafCheckLogo size={200} />
      </View>

      {/* Title */}
      <Text style={styles.title}>Log in</Text>

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

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <CustomTextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry={!showPassword}
          returnKeyType="done"
          onSubmitEditing={handleLogin}
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

      {/* Forgot Password Link */}
      <TouchableOpacity
        onPress={handleForgotPassword}
        style={styles.forgotPasswordLink}
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <AuthButton title="Log in" onPress={handleLogin} />

      {/* Register Link */}
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>No account? </Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerLink}>Sign up</Text>
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
  logoContainer: {
    alignItems: "center",
    marginBottom: 32,
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
  forgotPasswordLink: {
    alignSelf: "center",
    marginBottom: 24,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "#4CAF50",
    fontWeight: "500",
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  registerText: {
    fontSize: 16,
    color: "#757575",
  },
  registerLink: {
    fontSize: 16,
    color: "#4CAF50",
    fontWeight: "600",
  },
});

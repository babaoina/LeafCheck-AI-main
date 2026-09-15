import { AuthButton } from "@/components/auth-button";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function OTPVerification() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const email = params.email ? decodeURIComponent(params.email as string) : "";

  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleVerify = () => {
    if (otp.length === 6) {
      // Hardcoded navigation to home screen
      router.replace("/");
    }
  };

  const handleResend = () => {
    setCountdown(60);
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
      <Text style={styles.title}>OTP Verification</Text>

      {/* Email info */}
      <Text style={styles.emailInfo}>We sent a code to {email}</Text>

      {/* OTP Input */}
      <View style={styles.otpContainer}>
        <Text style={styles.otpLabel}>Enter 6-digit code</Text>
        <View style={styles.otpInputContainer}>
          <Text style={styles.otpCode}>{otp.padEnd(6, "0")}</Text>
        </View>
      </View>

      {/* Verify Button */}
      <AuthButton
        title="Verify"
        onPress={handleVerify}
        disabled={otp.length !== 6}
      />

      {/* Resend Code Link */}
      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>
          {countdown > 0 ? `Resend code in ${countdown}s` : "Resend code"}
        </Text>
        <TouchableOpacity onPress={handleResend} disabled={countdown > 0}>
          <Text style={styles.resendLink}>
            {countdown > 0 ? "Waiting..." : "Resend"}
          </Text>
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
    marginBottom: 16,
  },
  emailInfo: {
    fontSize: 16,
    color: "#757575",
    textAlign: "center",
    marginBottom: 32,
  },
  otpContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  otpLabel: {
    fontSize: 14,
    color: "#757575",
    marginBottom: 8,
  },
  otpInputContainer: {
    width: 200,
    height: 60,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  otpCode: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  resendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  resendText: {
    fontSize: 14,
    color: "#757575",
    marginRight: 8,
  },
  resendLink: {
    fontSize: 14,
    color: "#4CAF50",
    fontWeight: "600",
  },
});

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 18 }]}>
      <Pressable onPress={() => router.back()} style={styles.back} accessibilityRole="button">
        <Ionicons name="chevron-back" size={26} color="#1E7337" />
      </Pressable>
      <View style={styles.avatar}>
        <Ionicons name="person-outline" size={54} color="#20A64A" />
      </View>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.subtitle}>Manage your Leaf Check account.</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Sensor connection</Text>
        <Text style={styles.value}>Not connected</Text>
        <Text style={styles.helper}>Dashboard values remain 0 until an IoT device is connected.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#FFFFFF", paddingHorizontal: 28 },
  back: { alignSelf: "flex-start", padding: 8 },
  avatar: { width: 104, height: 104, borderRadius: 52, backgroundColor: "#E9F8EB", alignItems: "center", justifyContent: "center", marginTop: 48 },
  title: { marginTop: 22, fontSize: 30, fontWeight: "700", color: "#25833C" },
  subtitle: { marginTop: 8, fontSize: 15, color: "#777777" },
  card: { width: "100%", marginTop: 34, padding: 20, borderRadius: 20, borderWidth: 1, borderColor: "#25B853", backgroundColor: "#FFFFFF" },
  label: { fontSize: 15, color: "#777777" },
  value: { marginTop: 8, fontSize: 21, fontWeight: "700", color: "#E7A800" },
  helper: { marginTop: 10, fontSize: 13, lineHeight: 19, color: "#777777" },
});

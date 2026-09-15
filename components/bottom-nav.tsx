import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const items = [
    { label: "Home", icon: "home-outline" as const, activeIcon: "home" as const, route: "/(tabs)" as const },
    { label: "Spaces", icon: "leaf-outline" as const, activeIcon: "leaf" as const, route: "/(tabs)/spaces" as const },
    { label: "Camera", icon: "camera-outline" as const, activeIcon: "camera" as const, route: "/(tabs)/camera" as const },
  ];

  return (
    <View style={styles.outer}>
      <View style={styles.container}>
      {items.slice(0, 2).map((item) => {
        const active = pathname === item.route
          || (item.route === "/(tabs)" && pathname === "/")
          || (item.route === "/(tabs)/spaces" && pathname.includes("space"));
        return (
          <TouchableOpacity
            key={item.label}
            style={styles.item}
            onPress={() => router.replace(item.route)}
            accessibilityRole="button"
            accessibilityLabel={item.label}
          >
            <Ionicons name={active ? item.activeIcon : item.icon} size={25} color="#111111" />
          </TouchableOpacity>
        );
      })}
      </View>
      <TouchableOpacity style={styles.camera} onPress={() => router.replace("/(tabs)/camera")} accessibilityRole="button">
        <Ionicons name="camera-outline" size={27} color="#111111" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 174,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 7,
    elevation: 5,
  },
  item: {
    width: 72,
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 7,
    elevation: 5,
  },
});

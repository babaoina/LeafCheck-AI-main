import { BottomNav } from '@/components/bottom-nav';
import { Ionicons } from '@expo/vector-icons';
import { usePlantData } from '@/context/plant-data';
import { StyleSheet, Text, View } from 'react-native';

export default function CameraScreen() {
  const data = usePlantData();
  return (
    <View style={styles.container}>
      <View style={styles.cameraCard}>
        <Ionicons name="camera-outline" size={64} color="#25833C" />
        <Text style={styles.title}>Scan a leaf</Text>
        <Text style={styles.subtitle}>Use your camera to identify your plant.</Text>
        <Text style={styles.live}>Current health: {data.overallHealth}%</Text>
      </View>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  cameraCard: {
    width: '82%',
    aspectRatio: 1.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    backgroundColor: '#E9F8EB',
    gap: 10,
  },
  title: { fontSize: 26, fontWeight: '700', color: '#25833C' },
  subtitle: { fontSize: 15, color: '#777777' },
  live: { fontSize: 14, color: '#20A64A', fontWeight: '600' },
});

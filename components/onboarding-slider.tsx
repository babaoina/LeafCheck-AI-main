import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function OnboardingSlider({
  currentSlide,
  onPrevious,
  onNext,
  onGetStarted,
  onLetsGo,
}: {
  currentSlide: number;
  onPrevious: () => void;
  onNext: () => void;
  onGetStarted: () => void;
  onLetsGo: () => void;
}) {
  const slides = [
    {
      id: 1,
      title: "Meet your plants",
      description: "Scan any leaf to instantly identify the species.",
      icon: <Image source={require("@/assets/images/leafcheck-logo.png")} style={styles.logo} />,
      bgColor: "#FFFFFF",
      ctaText: "GET STARTED",
      ctaAction: onGetStarted,
    },
    {
      id: 2,
      title: "Scan for instant answers",
      description: "Life IoT sensors read soil moisture pH and temperature.",
      icon: (
        <View style={[styles.illustration, { backgroundColor: "#82DFA4" }]}>
          <Ionicons name="search-outline" size={58} color="#16251B" />
        </View>
      ),
      bgColor: "#FFFFFF",
      ctaText: "NEXT",
      ctaAction: onNext,
    },
    {
      id: 3,
      title: "Care for them daily",
      description: "Track alerts and archive plants you've set up.",
      icon: (
        <View style={[styles.illustration, { backgroundColor: "#E9EA92" }]}>
          <Ionicons name="location-outline" size={58} color="#16251B" />
        </View>
      ),
      bgColor: "#FFFCC7",
      ctaText: "LET'S GO",
      ctaAction: onLetsGo,
    },
  ];

  const currentSlideData = slides[currentSlide];

  return (
    <View
      style={[styles.container, { backgroundColor: currentSlideData.bgColor }]}
    >
      {currentSlide > 0 && (
        <TouchableOpacity onPress={onPrevious} style={styles.backButton}>
          <Ionicons name="chevron-back" size={20} color="#1C6B35" />
        </TouchableOpacity>
      )}

      <View style={styles.illustrationCard}>{currentSlideData.icon}</View>

      <Text style={styles.title}>{currentSlideData.title}</Text>

      <Text style={styles.description}>{currentSlideData.description}</Text>

      <View style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentSlide ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>

      <TouchableOpacity
        onPress={currentSlideData.ctaAction}
        style={styles.ctaButton}
      >
        <Text style={styles.ctaButtonText}>{currentSlideData.ctaText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 48,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 24,
    width: 34,
    height: 34,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#222",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  illustrationCard: {
    width: "100%",
    aspectRatio: 1.08,
    maxWidth: 320,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 28,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.14,
    shadowRadius: 7,
    elevation: 5,
  },
  illustration: {
    width: "72%",
    aspectRatio: 1,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "72%",
    height: "72%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#25833C",
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: "#777777",
    textAlign: "center",
    marginBottom: 42,
    lineHeight: 21,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 28,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#23853E",
  },
  inactiveDot: {
    backgroundColor: "#BDBDBD",
  },
  ctaButton: {
    width: "100%",
    paddingVertical: 17,
    borderRadius: 10,
    backgroundColor: "#4CAF50",
    alignItems: "center",
    justifyContent: "center",
  },
  ctaButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});

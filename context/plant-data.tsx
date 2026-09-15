import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { SensorReading, subscribeToSensorReadings } from "@/services/iot-sensor";

const disconnectedReading: SensorReading = {
  healthy: 0,
  needsCare: 0,
  critical: 0,
  overallHealth: 0,
  soilMoisture: 0,
  soilPh: 0,
  temperature: 0,
  recentAlerts: 0,
  updatedAt: new Date(0),
};

const PlantDataContext = createContext<SensorReading>(disconnectedReading);

export function PlantDataProvider({ children }: PropsWithChildren) {
  const [reading, setReading] = useState(disconnectedReading);

  useEffect(() => subscribeToSensorReadings(setReading), []);

  return <PlantDataContext.Provider value={reading}>{children}</PlantDataContext.Provider>;
}

export function usePlantData() {
  return useContext(PlantDataContext);
}

// usePosition custom React hook
// inspired by https://github.com/trekhleb/use-position

import { useState, useEffect } from 'react';

const defaultSettings = {
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0,
};

interface Position {
  latitude: number | null
  longitude: number | null
  accuracy: number | null
  timestamp: string | null
}

export const usePosition = (enabled = false, settings = defaultSettings) => {
  const [position, setPosition] = useState<Position>({
    latitude: null,
    longitude: null,
    accuracy: null,
    timestamp: null,
  });
  const [error, setError] = useState<string | null>(null);

  const onChange = ({ coords, timestamp }: any) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
      timestamp,
    });
  };

  const onError = (error: any) => {
    setError(error.message);
  };

  useEffect(() => {
    if (!enabled) return;
    if (!navigator || !navigator.geolocation) {
      setError('Geolocation is not supported');
      return;
    }
    navigator.geolocation.getCurrentPosition(onChange, onError, settings);
  }, [
    enabled,
    settings,
  ]);

  return { ...position, error };
};

import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    const loadStoredValue = async () => {
      try {
        const item = await AsyncStorage.getItem(key);
        if (item !== null) {
          setStoredValue(JSON.parse(item));
        }
      } catch (error) {
        console.error("Error loading stored value", error);
      }
    };

    loadStoredValue();
  }, [key]);

  const setValue = async (value: T) => {
    try {
      setStoredValue(value);
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting stored value", error);
    }
  };

  return [storedValue, setValue] as const;
}

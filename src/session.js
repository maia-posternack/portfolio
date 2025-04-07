export const session = {
  // Store data in either localStorage (persistent) or sessionStorage (temporary)
  set(key, value, isSession = false) {
    const storage = isSession ? sessionStorage : localStorage;
    console.log(`Setting ${key} to:`, value); // Log to check what is being set
    try {
      storage.setItem(key, JSON.stringify(value)); // Store data
    } catch (e) {
      console.error(`Error setting ${key} in ${isSession ? 'sessionStorage' : 'localStorage'}`, e);
    }
  },

  // Retrieve data from either localStorage or sessionStorage
  get(key, isSession = false) {
    const storage = isSession ? sessionStorage : localStorage;
    const item = storage.getItem(key);
    console.log(`Getting ${key} from ${isSession ? 'sessionStorage' : 'localStorage'}:`, item);
    try {
      return item ? JSON.parse(item) : null; // Parse the JSON data if it exists
    } catch {
      return item; // Return raw item if it's not JSON
    }
  },

  // Clear data from either localStorage or sessionStorage
  clear(isSession = false) {
    const storage = isSession ? sessionStorage : localStorage;
    console.log(`Clearing ${isSession ? 'sessionStorage' : 'localStorage'}`);
    storage.clear(); // Clear the specified storage
  },

  // Clear a specific key from either localStorage or sessionStorage
  clearItem(key, isSession = false) {
    const storage = isSession ? sessionStorage : localStorage;
    console.log(`Clearing ${key} from ${isSession ? 'sessionStorage' : 'localStorage'}`);
    storage.removeItem(key); // Remove a specific key
  }
}

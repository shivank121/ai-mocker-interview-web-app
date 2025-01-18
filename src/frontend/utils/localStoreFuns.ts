// Set an item in local storage
export const setItem = (key: string, value: any): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Failed to set item in local storage:', error);
    }
  };
  
  // Get an item from local storage
  export const getItem = (key: string): any => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Failed to get item from local storage:', error);
      return null;
    }
  };
  
  // Remove an item from local storage
  export const removeItem = (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Failed to remove item from local storage:', error);
    }
  };
  
  // Clear all items from local storage
  export const clearStorage = (): void => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Failed to clear local storage:', error);
    }
  };
  
  
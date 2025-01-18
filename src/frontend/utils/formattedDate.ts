// src/utils/validators/formattedDate.ts

// Validate if a date string matches the format DD/MM/YYYY
export const validateDateDDMMYYYY = (date: string): boolean => {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(date);
  };
  
  // Validate if a date string matches the format MM/DD/YYYY
  export const validateDateMMDDYYYY = (date: string): boolean => {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(date);
  };
  
  // Get the current year
  export const getCurrentYear = (): number => {
    return new Date().getFullYear();
  };
  
  // Get the current month (1-12)
  export const getCurrentMonth = (): number => {
    return new Date().getMonth() + 1; // Months are zero-indexed (0-11)
  };
  
  // Get the current date of the month (1-31)
  export const getCurrentDate = (): number => {
    return new Date().getDate();
  };
  
  // Get the current day of the week (0-6, where 0 is Sunday)
  export const getCurrentDay = (): number => {
    return new Date().getDay();
  };
  
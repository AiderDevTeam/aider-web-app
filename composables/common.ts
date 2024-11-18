import axios from "axios";

export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const API_BASE_URL = () => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiUrl;  
  
  return baseURL;
};

export const formattedDate = (date: string) => {

  // Create a Date object from the input string
  const dateObject = new Date(date);

  // Extract year, month, and day components
  const year = dateObject.getFullYear();
  const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-indexed
  const day = dateObject.getDate().toString().padStart(2, '0');

  // Create the formatted date string
  const formattedDateString = `${day}/${month}/${year}`;
  return formattedDateString
}

export const formatDateTime = (datetimeStr: string) =>{
  const date = new Date(datetimeStr);
  
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);
  
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'pm' : 'am';
  
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  
  const formattedTime = `${day}/${month}/${year} ${hours}:${minutes}${ampm}`;
  return formattedTime;
}

export const formatInputDateTime = (datetimeStr: string) =>{
  const date = new Date(datetimeStr);
  
  date.setMonth(11);
  date.setDate(12);
  date.setHours(20);
  date.setMinutes(12);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // add 1 to month to get 1-based month
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
  return formattedDateTime;
}

export const formatDateString = (date: string) => {
  const parts = date.split('-');
  const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;  
  return formattedDate
}

export const formatDateTimeForChat = (dateTimeString: string) => {
  const date = new Date(dateTimeString);
  const currentDate = new Date();

  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round(Math.abs((date.getTime() - currentDate.getTime()) / oneDay));

  if (diffDays > 7) {
    const day = date.getUTCDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getUTCFullYear();
    return `${day} ${month} ${year}`;
  } else {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = daysOfWeek[date.getUTCDay()];

    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    return `${dayName} ${hours}:${minutes}${ampm}`;
  }
};

export const dateToDobFormat = (dateStr: string | number | Date) =>{
  // Create a Date object from the input string
  const date = new Date(dateStr);

  // Array of month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  // Get the day, month, and year from the Date object
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // Construct the formatted date string
  return `${month} ${day}, ${year}`;
}

export const calculateAge = (dob: string | number | Date) => {
  const birthDate = new Date(dob);
  const today = new Date();
  
  const differenceInMilliseconds = today.getTime() - birthDate.getTime();
  
  const daysDifference = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  
  const weeksDifference = Math.floor(daysDifference / 7);
  
  const monthsDifference = (today.getFullYear() - birthDate.getFullYear()) * 12 + (today.getMonth() - birthDate.getMonth());
  
  let ageInYears = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    ageInYears--;
  }
  
  if (ageInYears > 0) {
    return `${ageInYears} year${ageInYears > 1 ? 's' : ''}`;
  } else if (monthsDifference > 0) {
    return `${monthsDifference} month${monthsDifference > 1 ? 's' : ''}`;
  } else if (weeksDifference > 0) {
    return `${weeksDifference} week${weeksDifference > 1 ? 's' : ''}`;
  } else {
    return `${daysDifference} day${daysDifference > 1 ? 's' : ''}`;
  }
}

export const parseDateRange = (dateRange: string) =>{
  const [start, end] = dateRange.split(' - ').map(dateStr => {
    const [day, month, year] = dateStr.split('-');
    return { day, month, year };
  });
  return { start_date: `${start.day}-${start.month}-${start.year}`, end_date: `${end.day}-${end.month}-${end.year}` };
}

export const convertFeetAndInchesToCm = (feet: number, inches: number) => {
  const feetToCm = feet * 30.48;
  const inchesToCm = inches * 2.54;
  const totalCm = feetToCm + inchesToCm;
  return Math.ceil(totalCm);
}

export const convertDateTime = (input: string | number | Date) =>{
  const date = new Date(input);
  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();
  const hours = date.getHours() % 12 || 12;
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

  return `${month}/${day}/${year} ${hours}:${minutes}${ampm}`;
}

export const getBmiWeight = (bmiValue: string) => {
  const bmi = parseFloat(bmiValue);  
  let category = '';

  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  return category;
}

export const calculatePercentage = (amount: string, totalAmount:string) => {
  const value = parseFloat(amount);  
  const total = parseFloat(totalAmount);  
  const percentage = (value/total) * 100
  return isNaN(percentage) ? 0 : percentage.toFixed(2);
}

export const calculateAmountByPercentage = (amount: string, totalAmount:string) => {
  const value = parseFloat(amount);  
  const total = parseFloat(totalAmount);  
  const calculateAmount = (value/100) * total
  return isNaN(calculateAmount) ? 0 : calculateAmount.toFixed(2);
}

export const triggerDownload = (csvContent: any, filename: string) =>{
  // Create a Blob from the CSV content
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  // Create a link element to trigger the download
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);

  // Append the link to the document, trigger click, and then remove the link
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};







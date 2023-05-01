export const dateTimeFormat = (timestamp) => {

// Convert the timestamp to a Date object
const dateObject = new Date(timestamp);

// Define an array of month names
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Get the day, month, and year
const day = dateObject.getDate();
const monthIndex = dateObject.getMonth();
const year = dateObject.getFullYear();

// Get the hour, minute, and AM/PM indicator
let hour = dateObject.getHours();
const isPM = hour >= 12;
hour = hour % 12 || 12;
const minute = dateObject.getMinutes();

// Format the date as a string in the desired format
const formattedDate = `${day} ${monthNames[monthIndex]} ${year} @ ${hour.toString().padStart(2, '0')}.${minute.toString().padStart(2, '0')}${isPM ? 'pm' : 'am'}`;

return formattedDate;

};

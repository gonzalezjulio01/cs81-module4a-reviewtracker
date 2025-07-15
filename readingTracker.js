// Weekly reading log
// This array stores reading entries for each day of the week.
// Each entry is an object with a day, book title, and minutes read.
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];


//  Function Summary:
// Adds a new reading entry to the readingLog array.
// Takes in a day (string), book title (string), and number of minutes (number).
// The function creates a new entry and adds it to the end of the log.
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes };
  readingLog.push(newEntry); // Adds the new object to the array
}


//  Function Summary:
// Calculates the total reading time from the log.
// Takes in an array of reading entries.
// Returns the sum of all 'minutes' values.
function totalReadingMinutes(log) {
  let total = 0;
  for (let entry of log) {
    total += entry.minutes; // Add minutes from each entry
  }
  return total; // Final total
}


//  Function Summary:
// Finds the most frequently read book in the log.
// Takes in an array of reading entries.
// Returns the title of the book with the most entries.
function mostReadBook(log) {
  const bookCounts = {}; // Object to track how many times each book was read

  // Count how many times each book appears
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }

  let maxBook = null; // The book read the most
  let maxCount = 0;   // The highest count

  // Find the book with the highest count
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }

  return maxBook;
}


//  Function Summary:
// Prints a daily summary of what was read.
// Takes in an array of reading entries.
// Loops through and prints the day, minutes, and book.
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}


//  Suggested Improvement:
// The functions always use the global `readingLog` directly.
// A better design would be to pass `readingLog` into every function,
// so the functions are reusable with other logs if needed.


//  Example usage (test cases):

// Adds a new book entry for Saturday
addReadBook("Saturday", "Dune", 50);

// Adds a new test case for Sunday
addReadBook("Sunday", "The Alchemist", 35);  // 👈 This is the new test case you added

// Prints a summary of each day’s reading
printDailySummary(readingLog);

// Logs the total minutes read in the week
console.log("Total minutes read:", totalReadingMinutes(readingLog));

// Logs the most read book
console.log("Most read book:", mostReadBook(readingLog));

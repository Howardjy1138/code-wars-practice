// You probably know the "like" system from Facebook and other pages. People
// can "like" blog posts, pictures or other items. We want to create the text
// that should be displayed next to such an item.
//
// Implement a function likes :: [String] -> String, which must take in input
// array, containing the names of people who like an item. It must return the
// display text as shown in the examples:
// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

// For more than 4 names, the number in and 2 others simply increases.

function likes(names) {
  if (names.length === 0) {
    return 'no one likes this';
  } else if (names.length === 1) {
    return names[0] + ' likes this';
  } else if (names.length === 2) {
    return names.join(' and ') + ' like this';
  } else if (names.length === 3) {
    return names.slice(0, 2).join(', ') + ' and ' + names[2] + ' like this';
  } else if (names.length >= 4) {
    return names.slice(0, 2).join(', ') + ' and ' + (names.length-2) + ' others like this';
  }
}
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
// 'Alex, Jacob and 2 others like this'

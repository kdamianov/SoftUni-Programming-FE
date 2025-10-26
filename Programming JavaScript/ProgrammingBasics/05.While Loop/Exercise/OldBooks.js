function execute(input) {
  let checkedBooks = 0;
  let searchBook = input[0];
  let index = 1;
  while (input[index] !== "No More Books") {
    if (input[index] === searchBook) {
      console.log(`You checked ${checkedBooks} books and found it.`);
      return;
    }
    index++;
    checkedBooks++;
  }
  console.log("The book you search is not here!");
  console.log(`You checked ${checkedBooks} books.`);
}

execute([
  "Bourne",

  "True Story",

  "Forever",

  "More Space",

  "The Girl",

  "Spaceship",

  "Strongest",

  "Profit",

  "Tripple",

  "Stella",

  "The Matrix",

  "Bourne",
]);

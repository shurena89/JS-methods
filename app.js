// Array

let books = [
    {author: "Michelle Obama", title: "The light we Carry", year: 2022, pages: 336},
    {author: "Delia Owens", title: "Where the crowdads Sing", year: 2021, pages: 400},
    {author: "James Clear", title: "Atomic Habits", year: 2018, pages: 320},
    {author: "Prince Harry", title: "Spare", year: 2023, pages: 416},
    {author: "Jodi Picoult", title: "Small Great Things", year: 2016, pages: 510}
]

//regular (ES5) iteration using for

for (let i=0; i<books.length; i ++) {
    console.log(books[i]);
}

// for... of... same result as in ES5 for()

for (let book of books) {
   console.log(book);  
}

// for..in... returns indexes

for (let book in books) {
   console.log(book);
}

//forEach

books.forEach(book => console.log(book));

//map creates new Array, used to modify current array into new different array

//returns (true, false for each line if it matches)

newBooks = books.map(book=>{
    console.log(book.year > 2020);
})

//returns array of years

newBooks = books.map(book=>{
    console.log(book.year);
})

//returns new lines

newBooks = books.map(book=>{
    console.log(`The ${book.title} was written by ${book.author} in ${book.year}`);
})

//filter is used to create a new array with filtered parameters. Using ES5 it will look as following:

let smallestBooks = [];

for(let i = 0; i < books.length; i++){
    
    if(books[i].pages < 350){
        smallestBooks.push(books[i]);
    }
}

console.log(smallBooks);

//Here is how the same result will be reached by using filter (it was books.pages, here book.pages!!!):

const smallBooks = books.filter(book=> {
    if (book.pages < 350) {
        return true;
    }
})

//shorter version:

const shortBooks = books.filter(book => book.pages < 350);

console.log(shortBooks);

//Reduce function is used if you need to find smth like total of pages of all books. Doing smth common between array elements. Using ES5, it will look like this:

let total = 0;
for(let i = 0; i < books.length; i++){
 total+= books[i].pages;
}

console.log(total);

//Reduce function for the same task. Has 2 parameters + there is starting parameter!! In this case 0.

const final = books.reduce((total, book)=> {
    return total + book.pages;
},0);
console.log(final);

//find

let princeHurry = books.find(book=> book.author === "Prince Harry");

console.log(princeHurry);

//findIndex

let spareIndex = books.findIndex(book=> book.title === "Spare");

console.log(spareIndex);




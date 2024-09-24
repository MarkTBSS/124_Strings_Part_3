"use strict";

//17.1
function logBookCategories(str) {
    const categories = str.split(";");

    for (let category of categories) {
        console.log(category);
    }
}

const bookCategories = 'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
logBookCategories(bookCategories);

//17.2
function getKeywordsAsString(books) {
    const keywords = [];

    for (const book of books) {
        keywords.push(...book.keywords);
    }

    const uniqueKeywords = [...new Set(keywords)];

    return uniqueKeywords.join(";");
}

const books = [
    { title: "Book 1", keywords: ["computer science", "programming", "algorithms"] },
    { title: "Book 2", keywords: ["data structures", "java", "programming"] },
    { title: "Book 3", keywords: ["math", "software", "engineering"] },
    { title: "Book 4", keywords: ["javascript", "programming", "computer science"] }
];
console.log(getKeywordsAsString(books));

//17.3
function logBookChapters(chapters) {
    for (const [chapter, pages] of chapters) {
        console.log(chapter.padEnd(20, "_") + " " + pages);
    }
}

const bookChapters = [['The Basics', 14], ['Sorting', 254], ['Searching', 372], ['Graphs', 526], ['Strings', 706]];
logBookChapters(bookChapters);
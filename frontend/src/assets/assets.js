import one from './one.jpg';
import two from './two.jpg';
import three from './three.jpg';
import four from './four.jpg';
import five from './five.jpg';
import six from './six.webp';
import seven from './seven.avif';
import eight from './eight.png';
import nine from './nine.jpg';
import ten from './ten.jpeg';

import star from './star.png';
import add from './add.png'
import red_remove from './red_remove.png';
import green_add from './green_add.png'

import magic from './magic.png'
import Dystopian from './Dystopian.jpg'
import Thriller from './Thriller.jpg'
import Historical_Fiction from './Historical-Fic.jpg'
import Fantasy from './Fantasy.jpg'
import Children from './Children.png'
import Science from './Science.jpg'
import ScienceAndFiction from './ScienceAndFiction.png'

export const assets={star,add,green_add,red_remove};

export const SomeBooks = [
    {
        book_name: "Magical",
        book_image: magic,
    },
    {
        book_name: "Dystopian",
        book_image: Dystopian,
    },
    {
        book_name: "Thriller",
        book_image: Thriller,
    },
    {
        book_name: "Historical-Fic",
        book_image: Historical_Fiction,
    },
    {
        book_name: "Fantasy",
        book_image: Fantasy,
    },
    {
        book_name: "Children",
        book_image: Children,
    },
    {
        book_name: "Science",
        book_image: Science,
    },
    {
        book_name: "Sci-Fic",
        book_image: ScienceAndFiction,
    },
];

export const ListOfBooks = [
    {
        _id: "1",
        name: "Harry Potter",
        image: one,
        price: "$100",
        description: "A magical world set in a Hogwarts-like school. Follow the story of Harry, Hermione, and Ron as they discover magic, make friends, and battle dark forces.",
        category: "Magical"
    },
    {
        _id: "2",
        name: "The Last Four Things",
        image: two,
        price: "$12",
        description: "A thought-provoking novel about the fate of humanity, following the lives of four individuals in the midst of a global disaster.",
        category: "Dystopian"
    },
    {
        _id: "3",
        name: "Out of the Box",
        image: three,
        price: "$15",
        description: "A gripping mystery about a group of innovators who venture into uncharted territory to solve a crime no one expected.",
        category: "Thriller"
    },
    {
        _id: "4",
        name: "The Past is Rising",
        image: four,
        price: "$20",
        description: "A historical fiction novel that dives into a forgotten chapter of history, shedding light on the events that shaped our modern world.",
        category: "Historical-Fic"
    },
    {
        _id: "5",
        name: "Other London",
        image: five,
        price: "$18",
        description: "A parallel universe novel where London exists in a different dimension, and the protagonist must navigate this alternate reality.",
        category: "Fantasy"
    },
    {
        _id: "6",
        name: "The Sum Of All Things",
        image: six,
        price: "$22",
        description: "A philosophical journey through the mind of a mathematician who uncovers the mysteries of the universe and the sum of all things.",
        category: "Science"
    },
    {
        _id: "7",
        name: "OutSiders",
        image: seven,
        price: "$13",
        description: "A coming-of-age story about a group of teenagers who struggle with their identities and the pressures of societal expectations.",
        category: "Children"
    },
    {
        _id: "8",
        name: "The Little Story Book",
        image: eight,
        price: "$10",
        description: "A collection of short stories, each with its own moral lesson, perfect for readers of all ages.",
        category: "Children"
    },
    {
        _id: "9",
        name: "Zombie In a SpaceSuit",
        image: nine,
        price: "$25",
        description: "A science fiction novel that follows a group of survivors in space after a zombie outbreak threatens humanity's existence.",
        category: "Sci-Fic"
    },
    {
        _id: "10",
        name: "The Girl of Ink and Stairs",
        image: ten,
        price: "$17",
        description: "A dark fantasy novel where a girl discovers a hidden world beneath her feet, filled with secrets, magic, and danger.",
        category: "Fantasy"
    }
];

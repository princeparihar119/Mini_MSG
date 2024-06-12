const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("connection successfully");
    }).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Neha",
        to: "Priya",
        msg: "send me your exam sheets",
        created_at: new Date(),//UTC
    },
    {
        from: "Prince",
        to: "Aman",
        msg: "Hello aman!",
        created_at: new Date(),//UTC
    },
    {
        from: "Astha",
        to: "Sachin",
        msg: "I love you",
        created_at: new Date(),//UTC
    },
    {
        from: "Parth",
        to: "Himesh",
        msg: "all the best!",
        created_at: new Date(),//UTC
    },
    {
        from: "Deepak",
        to: "Debu",
        msg: "I love cooding",
        created_at: new Date(),//UTC
    },
];

Chat.insertMany(allChats);
import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name: "Murmuration",
            artist: "Blue Wednesday, Shopan",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/bb0db71fd74f15627e9912ad2278c13cee72ac2d-300x300.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=7814",
            color: ["#066C74", "#B57056"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Flushing the Stairs",
            artist: "Leavv",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9917",
            color: ["#E3EEB2", "#2C6A65"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Lilo",
            artist: "Middle School, The Field Tapes",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11244",
            color: ["#3F4458", "#E8F1E0"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Butterfly",
            artist: "Sleepy Fish",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10021",
            color: ["#0485A7", "#2C2849"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Imagination",
            artist: "Montell Fish",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/24bd0da848d9718fd19af104ff5c0b11f914cb25-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9332",
            color: ["#CF597C", "#F9E2D4"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Glory Days",
            artist: "Sitting Duck, Hoffy Beats, Otaam",
            cover: "https://chillhop.com/wp-content/uploads/2020/08/63d2d2cdabbc5df023603b5f47b2fb97963cb537-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=7981",
            color: ["#69C7B9", "#AFB467"],
            id: uuidv4(),
            active: false,
        },
    ];
}

export default chillHop;
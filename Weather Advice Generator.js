javascript
const weather = ["rain", "snow", "sunshine", "wind", "a storm", "hail"];
const accessory = ["snorkel", "ski's", "biggest straw hat", "umbrella"];


function randomMessageGenerator() {
    console.log(`Today there will be ${weather[Math.floor(Math.random() * weather.length)]}. Dont forget to pack your ${accessory[Math.floor(Math.random() * accessory.length)]}.`);
};

randomMessageGenerator();

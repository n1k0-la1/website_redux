// OG code from: https://codepen.io/pookagehayes/pen/jOeaMQP?editors=0010

// CONFIG
// ----------------------------
const foods = [
    "nik0la1.nekoweb.org_",
    "nik0la1.nekoweb.org_",
];

const typingSpeedMin = 50; // minimum delay between typing characters
const typingSpeedMax = 200; // maximum delay between typing characters
const interFoodDelay = 3000; // delay between finishing typing a food and deleting it for the next one


// CACHE
// -------------------------
let foodIndex = 0; // the index of the foods array that is currently being typed 


// INIT
// ------------------------
// get required DOM elements
const foodEl = document.querySelector(".food");
// start the loop
updateFood();


// UTILS
// ------------------------
// the timeline of a single food change
async function updateFood() {
    // delete the existing text one letter at a type
    await new Promise(deleteCurrentFood);
    // type the new text one letter at a time
    await new Promise(typeNewFood);

    setTimeout(() => {
        // carousel the food index
        foodIndex = foodIndex + 1 < foods.length ?
            foodIndex + 1 :
            0;

        // queue-up the next food
        updateFood(foodIndex);
    }, interFoodDelay)
} // updateFood


// delete the text that's already tehre, letter-by-letter
function deleteCurrentFood(resolve) {
    if (foodEl.innerText.length === 0) resolve();
    else {
        // get the new reduced text
        const newFoodText = foodEl.innerText.slice(0, -1);
        // create an inconsistent delay between edits so that it looks more human
        // NOTE: I've halved the time it takes to 'type' a deletion, so it looks like you're slamming backspace
        const typingSpeed = randomBetween(typingSpeedMin / 2, typingSpeedMax / 2);

        // apply changes
        foodEl.innerText = newFoodText
        setTimeout(() => deleteCurrentFood(resolve), typingSpeed);
    }
} // deleteCurrentFood


// type the new food, letter by letter
function typeNewFood(resolve, reject, food = foods[foodIndex], charIndex = 0) {
    if (food === foodEl.innerText) resolve();
    else {
        // figure out what the current character of the string is, and use it
        let character = food.charAt(charIndex);
        let nextIndex = charIndex + 1;

        // if it's a space, then we need to add the next letter to the end or the innerText will auto-trim
        if (character === " ") {
            character += food.charAt(nextIndex);
            nextIndex++;
        }

        // build the new food string
        const newFoodText = `${foodEl.innerText}${character}`;
        // create an inconsistent delay between edits so that it looks more human
        const typingSpeed = randomBetween(typingSpeedMin, typingSpeedMax);

        // apply changes
        foodEl.innerText = newFoodText;
        setTimeout(() => typeNewFood(resolve, reject, food, nextIndex), typingSpeed);
    }
} // typeNewFood


function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
} // randomBetween
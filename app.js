// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');

let mushroomCount = 3;

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2,
    },
    {
        name: 'Sarah',
        satisfaction: 3,
    },
    {
        name: 'Missael',
        satisfaction: 1,
    },
    {
        name: 'Soraya',
        satisfaction: 2,
    },
];

addMushroomButton.addEventListener('click', () => {
    if (Math.random() > 0.5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});

addFriendButton.addEventListener('click', () => {
    let newFriends = friendInputEl.value;
    // create a new friend object
    const newFriend = {
        name: newFriends,
        satisfaction: 1,
    };

    friendData.push(newFriend);
    // reset the input
    friendInputEl.value = '';
    // display all the friends (use a function here)
    displayFriends();
});

function displayFriends() {
    // clear out the friends in DOM
    friendsEl.textContent = '';
    // for each friend in state . . .
    for (let friend of friendData) {
        // use renderFriend to make a friendEl
        const friendEl = renderFriend(friend);
        // this is a clickable list, so . . .
        friendEl.addEventListener('click', () => {
            if (friend.satisfaction < 3 && mushroomCount > 0) {
                friend.satisfaction++;
                mushroomCount--;
            }
            displayFriends();
            displayMushrooms();
        });

        friendsEl.append(friendEl);
    }
}

function displayMushrooms() {
    mushroomsEl.textContent = '';

    for (let i = 0; i < mushroomCount; i++) {
        const mushroomEl = renderMushroom();

        mushroomsEl.append(mushroomEl);
    }
}

displayFriends();
displayMushrooms();
//display

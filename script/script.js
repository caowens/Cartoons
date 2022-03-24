console.log('JS is connected..');
const getNewsBtn = document.querySelector('#btn-get-news');
const keyInput = document.querySelector('#rapid-api-key');
let APIKey = "";
/**
 * Check if API key is available in localStorage
 */
function checkLocalStorageForKey() {
    APIKey = localStorage.getItem("apiKey");
    if (APIKey === null)
        APIKey = "";
    else
        keyInput.value = APIKey
}
checkLocalStorageForKey();

/**
 * Click event handler for Get news
 */
getNewsBtn.addEventListener("click", function () {
    localStorage.setItem("apiKey", keyInput.value);
    console.log("Button Clicked:" + keyInput.value);
});

/**
 * Update view/DOM with news results 
 */
function updateNews(news) {
    
}


/**
 * Create a new promise
 */
// let success = true;
// const simplePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (success) {
//             resolve([
//                 { username: 'john', email: 'john@test.com' },
//                 { username: 'jane', email: 'jane@test.com' },
//             ]);
//         } else {
//             reject('Failed to the user list');
//         }
//     }, 1000);
// });

// function onFulfilled(users) {
//     console.log(users);
// }
// function onRejected(error) {
//     console.error(error);
// }

// simplePromise.then(onFulfilled, onRejected);


/**
 * Multiple promises
 */
// const promise100Ms = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, '100ms');
// });
// const promise1Sec = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, '1 sec');
// });
// const promise2Sec = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, '2 Sec');
// });

// Promise.all([promise100Ms, promise1Sec, promise2Sec])
//     .then(values => {
//         console.log({ values });
//     });
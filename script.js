// async function fetchData() {
//     const myHeaders = new Headers();
//     myHeaders.append("Cookie", "connect.sid=s%3AgjxZffKfe4zxSPmnSNqghEch_5Hv5xxi.PzKYcaZDvQ38Le03wmR5aLlS2Qi%2F%2FXeQ7UTBpcjRDIw");

//     const requestOptions = {
//         method: "GET",
//         headers: myHeaders,
//         redirect: "follow"
//     };

//     const res = await fetch("https://cat-fact.herokuapp.com/facts/", requestOptions)
//     record = await res.json()

//     console.log('record', record)
// }

// fetchData();

console.log('Script is running');

const button = document.getElementById('signin');
const uEmail = document.getElementById('email');

button.addEventListener("click", funcSignin)

function funcSignin() {
    console.log(uEmail.value);
    // Send data to REST API
    const arrUsr = [];

    fetch('https://fafandy.github.io/Onesimus-FUT/u.json') // Replace with your API URL
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON from the response
        })
        .then(data => {
            console.log('Data received:', data); // Log the data to the console

            const foundObject = data.find(obj => obj.name === uEmail.value);

            if (foundObject) {
                console.log("Found object:", foundObject);
            } else {
                console.log("Object not found.");
            }

            // if (Array.isArray(data)) {
            //     console.log("This is an array.");
            // } else if (typeof data === 'object' && data !== null) {
            //     console.log("This is a JSON object.");
            // } else {
            //     console.log("This is neither a JSON object nor an array.");
            // }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    // console.log(`Find user name: ${arrUsr.includes(uid.value)}`);
}

// button.addEventListener('click', function() {
//     const uidValue = uid.value;
//     console.log(uidValue);

//     // // Send data to REST API
//     // fetch('https://fafandy.github.io/Onesimus-FUT/u.json', {
//     //         method: 'GET',
//     //         headers: {
//     //             'Content-Type': 'application/json'
//     //         },
//     //         body: JSON.stringify(data)
//     //     })
//     //     .then(response => response.json())
//     //     .then(data => {
//     //         console.log('Success:', data);
//     //         // Handle successful response
//     //     })
//     //     .catch(error => {
//     //         console.error('Error:', error);
//     //         // Handle errors
//     //     });
// });
// // document.getElementById('uForm').addEventListener('submit', function(event) {
// //     event.preventDefault(); // Prevent the default form submission

// //     // Get form data
// //     const formData = new FormData(this);
// //     const data = {
// //         name: formData.get('uid'),
// //         email: formData.get('password')
// //     };

// //     // Send data to REST API
// //     fetch('https://fafandy.github.io/Onesimus-FUT/u.json', {
// //             method: 'GET',
// //             headers: {
// //                 'Content-Type': 'application/json'
// //             },
// //             body: JSON.stringify(data)
// //         })
// //         .then(response => response.json())
// //         .then(data => {
// //             console.log('Success:', data);
// //             // Handle successful response
// //         })
// //         .catch(error => {
// //             console.error('Error:', error);
// //             // Handle errors
// //         });
// // });
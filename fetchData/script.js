
const getShowEle = document.getElementById('show')

// function fetchData() {
//     fetch('http://127.0.0.1:5500/fetchData/data.text')
//         .then(ress => ress.text()) // converted to text
//         .then(data => {
//             getShowEle.innerText = data;
//         });
// }



// get data using async-await

async function fetchData() {
        const ress = await fetch('http://127.0.0.1:5500/fetchData/data.text');
        const myData = await ress.text();

        getShowEle.innerText = myData;
            
    }

//******************toolbar text******************

const contentTitle = document.getElementById('overview');
const userName = document.getElementById('name');

// Asynchronous function to fetch content and create text node
async function toolbarText() {
    try {
        // Fetch content using fetch
        const response = await fetch("../data/content.json");
        const data = await response.json();

        // Set inner HTML of elements
        contentTitle.innerHTML = data.overview;
        userName.innerHTML = data.name; 

    
    //catch errors that occur during the execution of the function 
    } catch (error) {
        console.error('Error:', error);
    }
}

// execute function
toolbarText();



// ******************overview cards******************
async function overviewText() {
    try {
        const response = await fetch("../data/content.json");
        const data = await response.json();

        // Iterate over each card and create HTML elements
        data.graphContainer.overviewcards.forEach(card => {
            const title = card['card-body']['card-title'];
            const number = card['card-body']['card-number'];

            // Create HTML elements
            const cardContainer = document.createElement('div');
            cardContainer.classList.add('card', 'text-center', 'mb-3', 'mx-3');
            cardContainer.style.width = '15rem';

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = title;

            const cardNumber = document.createElement('p');
            cardNumber.classList.add('card-number');
            cardNumber.textContent = number;

            // Append elements to each other
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardNumber);
            cardContainer.appendChild(cardBody);

            // Append the card container to the overview cards container in the HTML
            document.getElementById('overviewcards').appendChild(cardContainer);
        });

        // perform further actions with the retrieved data
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the async function when the document is loaded
document.addEventListener('DOMContentLoaded', function () {
    overviewText();
});


// ******************left bottom card******************

// left card upper part text
const leftcardTitle=document.getElementById('leftcard-title');
const viewDetails=document.getElementById('view-details');
const supportGroup= document.getElementById('support');

// Asynchronous function to fetch content and create text node
async function leftCardText() {
    try {
        // Fetch content using fetch
        const response = await fetch("../data/content.json");
        const data = await response.json();

        // Set inner HTML of elements
        leftcardTitle.innerHTML = data['leftcard-title'];
        viewDetails.innerHTML = data['view-details'];
        supportGroup.innerHTML = data['support'];
       

    //catch errors that occur during the execution of the function 
    } catch (error) {
        console.error('Error:', error);
    }
}

// execute function
leftCardText();



// left bottom card table

// Asynchronous function to fetch content and create text node
async function leftBottomCardTable() {
    try {
        // Fetch content using fetch
        const response = await fetch("../data/content.json");
        const data = await response.json();

        

        // create HTML for table
        const bottomlefttable = document.getElementById('bottomlefttable');
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');

        // add attribute to table
        table.setAttribute("class", `table mb-3`);

        // appendchild for element
        bottomlefttable.appendChild(table);
        table.appendChild(tbody);

        //create table rows and cells based on the data in the table_data
        data.bottom_left_card.table_data.forEach(thisItem => {

            let tableItem = document.createElement('tr');
            tableItem.innerHTML = `<td class="pl-0">${thisItem.status}</td>
            <td class="pr-0 text-right">
                <div class="rightsideText">${thisItem.count}</div>
            </td>`
            tbody.appendChild(tableItem);

        })


    //catch errors that occur during the execution of the function 
    } catch (error) {
        console.error('Error:', error);
    }
}

// execute function
leftBottomCardTable();


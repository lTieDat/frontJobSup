//fetch data from api

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the phone number entered by the user
    const phoneNumber = document.getElementById('phoneNumber').value;
    const phone = phoneNumber.replace(/\s/g, '');
    console.log(phone);
    let clientData = [];
    const apiUrl = `http://26.232.196.121:8080/api/v1/clients/search-by-phone-number?phone_no=${phone}`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(clientData);
        if(data.title === 'Not Found')
        {
            alert('Client not found');
        }
        else{
            console.log(data);
        }
    })
   
    

});

//fetch data from api

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the phone number entered by the user
    const phoneNumber = document.getElementById('phoneNumber').value;
    const phone = phoneNumber.replace(/\s/g, '');
    console.log(phone);
    let clientData = [];
    const apiUrl = `http://localhost:8080/api/v1/clients/search-by-phone-number?phone_no=${phone}`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if(data.title === 'Not Found')
        {
            alert('Client not found');
        }
        else{
            //send to backend to create contract
            const id = parseInt(data.cid);
            console.log(data.cid);
            //send to backend to create contract
            const createContractUrl = `http://localhost:8080/api/v1/contracts/create?CID=${id}`;
                fetch(createContractUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify()
                })
                .then(response => response.json())
                .then(createdContract => {
                    console.log('Contract created:', createdContract);
                    alert('Contract created successfully!');
                })
                .catch(error => {
                    console.error('Error creating contract:', error);
                    alert('Failed to create contract. Please try again.');
                });
            // get contract id created
            fetch(`http://localhost:8080/api/v1/contracts/contracts/{contract-id}?contract-id=${id}`)

        }
    })
   
    

});

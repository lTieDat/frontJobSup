              
        //get the contracts
        const apiUrl = 'http://localhost:8080/api/v1/contracts/contracts/all';
        const apiUrlClient ='http://localhost:8080/api/v1/clients/all'
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            fetch(apiUrlClient)
            .then(response => response.json())
            .then(dataClient => {
                console.log('Success:', dataClient);
                //get the table body
                const tableBody = document.getElementById('contractBody');
                data.forEach(contract => {
                    const client = dataClient.find(client => client.cid === contract.cid);
                    const row = tableBody.insertRow();
                    row.innerHTML = `
                    <td>${contract.ctID}</td>
                    <td>${client.name}</td>
                    <td>${contract.signDate}</td>
                    <td>${contract.mid}</td>
                    <td>
                        <button class="btn btn-primary" onclick="viewContract(${contract.ctID})">View</button>
                    </td>
                    `;
                });
            })
            
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        //view contract
        function viewContract(ctID){
            window.location.href = `detailContract.html?ctID=${ctID}`;
        }
        
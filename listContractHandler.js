              
        //dummy list of contract with id, client, date, manager
        const contract = [
            {id: 1, client: "Juan Dela Cruz", date: "2021-01-01", manager: "Juan Dela Cruz"},
            {id: 2, client: "Maria Clara", date: "2021-01-01", manager: "Juan Dela Cruz"},
            {id: 3, client: "Pedro Penduko", date: "2021-01-01", manager: "Juan Dela Cruz"},
            {id: 4, client: "Juan Tamad", date: "2021-01-01", manager: "Juan Dela Cruz"},
            {id: 5, client: "Juan Luna", date: "2021-01-01", manager: "Juan Dela Cruz"},
            {id: 6, client: "Jose Rizal", date: "2021-01-01", manager: "Juan Dela Cruz"},
        ];
        //get the table body
        const contractTableBody = document.querySelector('#contractBody');
        contract.forEach(contract => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${contract.id}</td>
                        <td>${contract.client}</td>
                        <td>${contract.date}</td>
                        <td>${contract.manager}</td>
                    `;
        contractTableBody.appendChild(row);
        });
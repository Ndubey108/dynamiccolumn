


            const tableDiv = document.createElement('div');
            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');
            
            table.id = 'user-table';
            
            fetch('https://jsonplaceholder.typicode.com/users')
              .then(response => response.json())
              .then(users => {
                // Get unique keys from all the user objects
                const keys = [...new Set(users.flatMap(user => Object.keys(user)))];
            
                // Create header row with keys
                const headerRow = document.createElement('tr');
                keys.forEach(key => {
                  const header = document.createElement('th');
                  header.textContent = key;
                  headerRow.appendChild(header);
                });
                thead.appendChild(headerRow);
                table.appendChild(thead);
            
                // Create data rows with cells for each user object
                users.forEach(user => {
                  const row = document.createElement('tr');
                  keys.forEach(key => {
                  // console.log(typeof user[key])
                  if(typeof user[key]==='string' || typeof user[key]==='number'){
                    const cell = document.createElement('td');
                    cell.textContent = user[key] || '';
                    row.appendChild(cell);}
                    else{
                      
                      const cell = document.createElement('td');
                      cell.textContent = key==="address"? user[key].street:user[key].name;
                      row.appendChild(cell);}
                  
                  })
                  tbody.appendChild(row);
                });
                table.appendChild(tbody);
                tableDiv.appendChild(table);
                document.body.appendChild(tableDiv);
              });




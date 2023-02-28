const tableDiv = document.createElement("div");
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

table.id = "user-table";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    // Get unique keys from all the user objects
    const userKeys = [...new Set(users.flatMap((user) => Object.keys(user)))];

    // Create header row with keys
    const headerRow = document.createElement("tr");
    userKeys.forEach((key) => {
      if (
        typeof users[0][key] === "string" ||
        typeof users[0][key] === "number"
      ) {
        const header = document.createElement("th");
        header.textContent = key;
        headerRow.appendChild(header);
      } else {
        const header = document.createElement("th");
        header.textContent = key;
        header.setAttribute("colspan", Object.keys(users[0][key]).length);
        Object.keys(users[0][key]).forEach((nestedKey) => {
          const nestedHeader = document.createElement("th");
          nestedHeader.textContent = nestedKey;
          header.appendChild(nestedHeader);
        });
        headerRow.appendChild(header);
      }
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create data rows with cells for each user object
    users.forEach((user) => {
      const row = document.createElement("tr");
      userKeys.forEach((key) => {
        if (typeof user[key] === "string" || typeof user[key] === "number") {
          const cell = document.createElement("td");
          cell.textContent = user[key] || "";
          row.appendChild(cell);
        } else {
          Object.keys(user[key]).forEach((nestedKey) => {
            const cdata = document.createElement("td");
            cdata.textContent = user[key][nestedKey];
            row.appendChild(cdata);
          });
        }
      });
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    tableDiv.appendChild(table);
    document.body.appendChild(tableDiv);
  });

                


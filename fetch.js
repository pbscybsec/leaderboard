// Fetch data from the API
fetch('https://leader4.onrender.com/api/users')
  .then(response => response.json())
  .then(data => {
    // Join first and last name, then sort by impressions in descending order
    const sortedData = data.map(user => ({
      name: `${user.firstName} ${user.lastName}`,
      impressions: user.impressions
    })).sort((a, b) => b.impressions - a.impressions);

    // Display the sorted leaderboard
    displayLeaderboard(sortedData);
  })
  .catch(error => console.error('Error fetching data:', error));

// Function to display the leaderboard in a table with Bootstrap styles
function displayLeaderboard(data) {
  const leaderboardElement = document.getElementById('leaderboard');

  // Create a table element with Bootstrap classes
  const table = document.createElement('table');
  table.classList.add('table', 'table-striped', 'table-hover');

  // Create the table header with Bootstrap classes
  const thead = document.createElement('thead');
  thead.classList.add('thead-dark');
  const headerRow = document.createElement('tr');

  const rankHeader = document.createElement('th');
  rankHeader.scope = 'col';
  rankHeader.textContent = 'Rank';
  headerRow.appendChild(rankHeader);

  const nameHeader = document.createElement('th');
  nameHeader.scope = 'col';
  nameHeader.textContent = 'Name';
  headerRow.appendChild(nameHeader);

  const impressionsHeader = document.createElement('th');
  impressionsHeader.scope = 'col';
  impressionsHeader.textContent = 'Impressions';
  headerRow.appendChild(impressionsHeader);

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create the table body
  const tbody = document.createElement('tbody');
  data.forEach((user, index) => {
    const row = document.createElement('tr');

    const rankCell = document.createElement('td');
    rankCell.textContent = index + 1;
    row.appendChild(rankCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = user.name;
    row.appendChild(nameCell);

    const impressionsCell = document.createElement('td');
    impressionsCell.textContent = user.impressions;
    row.appendChild(impressionsCell);

    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  // Append the table to the leaderboard element
  leaderboardElement.appendChild(table);
}

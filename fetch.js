// fetch.js

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

// Function to display the leaderboard
function displayLeaderboard(data) {
  const leaderboardElement = document.getElementById('leaderboard');

  // Clear previous content
  leaderboardElement.innerHTML = '';

  // Create and append Bootstrap list group items for each user
  data.forEach((user, index) => {
    const userElement = document.createElement('li');
    userElement.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

    const rankElement = document.createElement('span');
    rankElement.classList.add('badge', 'badge-primary', 'badge-pill');
    rankElement.textContent = index + 1;

    const userInfoElement = document.createElement('span');
    userInfoElement.textContent = `${user.name}: ${user.impressions} impressions`;

    userElement.appendChild(rankElement);
    userElement.appendChild(userInfoElement);

    leaderboardElement.appendChild(userElement);
  });
}

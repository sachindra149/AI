console.log("This is a sample console log");

document.getElementById('fetchData').addEventListener('click', () => {
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Example API URL

      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          document.getElementById('data').innerHTML = `
            <h3>Post Title:</h3>
            <p>${data.title}</p>
            <h3>Post Body:</h3>
            <p>${data.body}</p>
          `;
        })
        .catch(error => {
          document.getElementById('data').innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
    });
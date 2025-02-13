// Correct solution using promises
firebase.database().ref('/your-path').set(data)
  .then(() => {
    console.log('Data written successfully!');
  })
  .catch((error) => {
    console.error('Error writing data:', error);
  });
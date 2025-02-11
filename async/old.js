function logUser(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((body) => {
      console.log(`*** User ${userId}: ${JSON.stringify(body)}`);
    })
    .catch((err) => {
      console.error("*** Error:", err);
    });
}

console.log(`*** Before function call logUser(6)`);
logUser(6);
console.log(`*** After function call logUser(6)`);

console.log(`*** Before function call logUser(7)`);
logUser(7).then(() => {
  console.log(`*** After function call logUser(7)`);
});

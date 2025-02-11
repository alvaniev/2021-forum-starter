async function logUser(userId) {
  let response;
  let body;

  try {
    response = await
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    body = await response.json();
    obj = JSON.stringify(body);

    console.log(`*** User ${userId}: ${JSON.stringify(body)}`);
  } catch (err) {
    console.error("Error:", err);
  }
}

console.log(`*** Before function call logUser(6)`);
logUser(6);
console.log(`*** After function call logUser(6)`);

(async () => {
  console.log(`*** Before function call logUser(7)`);
  await logUser(7);
  console.log(`*** After function call logUser(7)`);
})();

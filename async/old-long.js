function getObj(objId) {
  let response;
  let body;

  response = fetch(`https://api.restful-api.dev/objects/${objId}`);
  body = response.then((response) => response.json());
  
  return body.then(
    (body) => {
      console.log(`Object ${objId}: ${JSON.stringify(body)}`);
    },
    (err) => console.error("Error:", err)
  );
}

getObj(6);
console.log(`After function call getObj(6)`);

getObj(7).then(() => {
  console.log(`After function call getObj(7)`);
});

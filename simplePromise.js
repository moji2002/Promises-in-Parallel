const endpoints = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
];

const connect = (endpoint) => {
  return new Promise((resolve, reject) => {
    try {
      fetch(endpoint)
        .then((res) => res.json())
        .then((json) => {
          resolve(json);
        });
    } catch (error) {
      reject(error);
    }
  });
};

connect(endpoints[0]).then((res) => console.log(res));

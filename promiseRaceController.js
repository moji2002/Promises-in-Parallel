const endpoints = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
];

const connect = (endpoints) => {
  const controller = new AbortController();
  const { signal } = controller;

  const p1 = new Promise((resolve, reject) => {
    fetch(endpoints[0], { signal })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((json) => {
        controller.abort();
        resolve(json);
      })
      .catch((err) => console.log(err.message));
  });

  const p2 = new Promise((resolve, reject) => {
    fetch(endpoints[1], { signal })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((json) => {
        controller.abort();
        resolve(json);
      })
      .catch((err) => console.log(err.message));
  });

  return Promise.race([p1, p2]);
};


connect(endpoints).then((res) => {
  console.log("race promise resolved", res);
});

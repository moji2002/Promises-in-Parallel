const connect = (api) => {
  const p1 = new Promise((resolve, reject) => {
    console.log("promise 1");

    setTimeout(() => {
      console.log("conecting to ", api);
      resolve(1);
    }, 2000);
  });

  const p2 = new Promise((resolve, reject) => {
    console.log("promise 2");

    setTimeout(() => {
      console.log("conecting to ", api);
      resolve(2);
    }, 1500);
  });

  // this will execute when first promises resolevd
  return Promise.race([p1, p2]).then((res) => res);
};

connect("fakeApi").then((res) => console.log(res));

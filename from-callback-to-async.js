const showAd = () => {
  console.clear();
  console.log("Callbackc");
  setTimeout(() => {
    console.clear();
    console.log("Promises");
    setTimeout(() => {
      console.clear();
      console.log("async/await");
      setTimeout(() => {
        console.clear();
      }, 2000);
    }, 2000);
  }, 2000);
};

let promiseShowAdd1 = new Promise((resolve, reject) => {
  console.clear();
  console.log("Callbackc");
  setTimeout(() => {
    console.clear();
    resolve();
  }, 2000);
});

promiseShowAdd1
  .then(() => {
    console.log("Promises");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.clear();
        resolve();
      }, 2000);
    });
  })
  .then(() => {
    console.log("async/await");
  });

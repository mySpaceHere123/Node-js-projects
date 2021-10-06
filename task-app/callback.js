const doWorkCallback = (callback) => {
  setTimeout(() => {
    callback(undefined, [1, 4, 7]);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    console.log(error);
  }
  console.log(result);
});

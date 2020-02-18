function awaitXs(X) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, X * 1000);
    });
};
export default awaitXs;
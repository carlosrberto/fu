const curry = function(fn) {
  const partial = function(prevArgs = []) {
    return function() {
      const nextArgs = [...prevArgs, ...arguments];
      if((prevArgs.length + arguments.length) === fn.length) {
        return fn.apply(null, nextArgs)
      } else {
        return partial(nextArgs);
      }
    }
  }
  return partial();
};

export default curry;

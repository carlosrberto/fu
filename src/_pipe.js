const _pipe = function(args) {
  return function() {
    return args.slice(1).reduce((accumulator, current) => {
      return current.call(null, accumulator);
    }, args.slice(0, 1)[0].apply(null, arguments));
  }
}

export default _pipe;

import _pipe from './_pipe';

const compose = function() {
  return _pipe(Array.from(arguments).reverse());
}

export default compose;

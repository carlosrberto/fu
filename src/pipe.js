import _pipe from './_pipe';

const pipe = function() {
  return _pipe(Array.from(arguments));
}

export default pipe;

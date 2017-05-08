function curry(func) {
  function more() {
    var params = [].slice.call(arguments);
    return ((params.length === func.length) ?
      func.apply(null, params) :
      more.bind.apply(more, [null].concat(params)));
  }
  return more;
}

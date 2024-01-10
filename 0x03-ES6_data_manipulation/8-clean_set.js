const cleanSet = (set, startString) => {
  const strings = [];

  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((val) => {
    if (typeof val === 'string' && val.startsWith(startString)) {
      strings.push(val.slice(startString.length));
    }
  });
  return strings.join('-');
};

export default cleanSet;

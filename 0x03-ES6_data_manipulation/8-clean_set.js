const cleanSet = (set, startString) => {
    const str = [];
  
    if (startString === '' || typeof startString !== 'string') return '';
    set.forEach((se) => {
      if (typeof se === 'string' && se.startsWith(startString)) {
        str.push(se.slice(startString.length));
      }
    });
    return str.join('-');
  };
  
  export default cleanSet;

const updateUniqueItems = (items) => {
    if (!(items instanceof Map)) {
      throw new Error('Cannot process');
    }
    for (const [a, q] of items.entries()) {
      if (q === 1) {
        items.set(a, 100);
      }
    }
    return items;
  };
  
  export default updateUniqueItems;

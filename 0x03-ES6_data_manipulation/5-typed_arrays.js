const createInt8TypedArray = (length, position, value) => {
    const buff = new ArrayBuffer(length);
    const int8Arr= new Int8Array(buff);
    if (position > int8Arr.length) throw new Error('Position outside range');
    int8Arr[position] = value;
    return new DataView(buff);
  };
  
  export default createInt8TypedArray;

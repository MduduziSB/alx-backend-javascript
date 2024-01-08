function createInt8TypedArray(length, position, value) => {
    const arrayBuffer = new ArrayBuffer(length);
    const int8Array = new Int8Array(arrayBuffer);
    if (position > int8Array.length) {
      throw new Error('Position outside range');
    }
    int8Array[position] = value;
    return new DataView(buffer);
}

export default createInt8TypedArray;

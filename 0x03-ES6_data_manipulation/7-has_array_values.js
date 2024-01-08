function hasValuesFromArray(givenSet, array) {
    return array.every((element) => givenSet.has(element));
}

export hasValuesFromArray;

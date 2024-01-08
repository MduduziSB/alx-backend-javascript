const getStudentIdsSum = (arr) => arr.reduce((sumID, cur) => sumID + cur.id, 0);

export default getStudentIdsSum;

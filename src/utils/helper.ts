export const checkWinner = (tileState: number[][]): number => {
  let tileArr = tileState;
  //Row check
  let check;
  for (let i = 0; i < 3; i++) {
    // @ts-ignore
    check = tileArr[0][i] + tileArr[1][i] + tileArr[2][i];
    if (check === 3) {
      return 1;
    } else if (check === -3) {
      return -1;
    }
  }
  //Column Check
  for (let i = 0; i < 3; i++) {
    // @ts-ignore
    check = tileArr[i][0] + tileArr[i][1] + tileArr[i][2];
    if (check === 3) {
      return 1;
    } else if (check === -3) {
      return -1;
    }
  }

  //diagonal check
  // @ts-ignore
  check = tileArr[0][0] + tileArr[1][1] + tileArr[2][2];
  if (check === 3) {
    return 1;
  } else if (check === -3) {
    return -1;
  }

  // @ts-ignore
  check = tileArr[2][0] + tileArr[1][1] + tileArr[0][2];
  if (check === 3) {
    return 1;
  } else if (check === -3) {
    return -1;
  }
  //No winners
  return 0;
};

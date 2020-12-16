/**
 * Alice and Bob take turns playing a game, with Alice starting first.
 * Initially, there is a number N on the chalkboard.  On each player's turn, that player makes a move consisting of:
 *    Choosing any x with 0 < x < N and N % x == 0.
 *    Replacing the number N on the chalkboard with N - x.
 * Also, if a player cannot make a move, they lose the game.
 * Return True if and only if Alice wins the game, assuming both players play optimally.
 */



const divisorGame = N => {
  let alice = true;
  let i = N - 1;
  while (N > 0) {
    if (N % i === 0 && alice) {
      alice = false;
      N -= i;
      i--;
      break;
    } else if (N % i === 0 && !alice) {
      alice = true;
      N -= i;
      i--;
      break;
    }
    i--;
  }
  console.log(N)
  return !alice;
};

console.log(divisorGame(3))
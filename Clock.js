function playerRankUp(points) {
  if (points >= 100) {
    return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up";
  } else if (points < 100) {
    points = false;
  }
  return points;
}
console.log(playerRankUp(100));

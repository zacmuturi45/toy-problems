function speedDetector(speed) {
    let points = speed>70? parseInt((speed-70)/5) : false;
    if (speed<70) {
      return "Ok.";
    } else if (speed > 70) {
      return points >= 1 && points <= 12 ? (`Points: ${points}.`) : `Points: ${points}. License suspended (in an Aussie accent).`;
    }
  }
    
  console.log(speedDetector(speed));

  // As the name implies, this problem charts a course of action based on input derived from vehicle speeds. 
  // The function takes speed values as the argument and passes them through the parameters provided. 
  // In this case if the speed is less than 70km/h, the function returns an "Ok" string. 
  // If the speed is more than 70km/h, then for every 5km/h increment, the user attains a point which, if surpasses 12 points, gets a "License suspended" message, otherwise if 12 or less than 12 points, the points are returned.



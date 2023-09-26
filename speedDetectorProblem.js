function speedDetector(speed) {
    let points = speed>70? parseInt((speed-70)/5) : false;
    if (speed<70) {
      return "Ok.";
    } else if (speed > 70) {
      return points >= 1 && points <= 12 ? (`Points: ${points}.`) : `Points: ${points}. License suspended (in an Aussie accent).`;
    }
  }
    
  console.log(speedDetector(100));




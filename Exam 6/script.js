/*
  Days in year: 366
  Probability = 1 - Pn
  Formula: Probability = 1 - 367 - n/366*/

  currentProbability = 0;
  probabilityHelper = 365/366;
  dayCount = 364;
  threshold = 0.5;
  thresholdCheck = false;
  peopleCount = 2;
  while (!thresholdCheck) {
      if (currentProbability >= threshold) {
          thresholdCheck = true;
      }
      else {
          peopleCount++;
          currentProbability = 1 - dayCount/366 * probabilityHelper;
          probabilityHelper *= dayCount/366;
          dayCount--;
      }
  }
  console.log("Minimum people in the room: " + peopleCount);
  console.log("Probability: " + currentProbability);
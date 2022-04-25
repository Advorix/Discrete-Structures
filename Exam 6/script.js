/*
 Outputs are at the bottom.   
 Days in year: 366
 Probability = 1 - Pn
 Formula: Probability = 1 - ...  * 367 - n/366
 */

  
 function birthdayProblem(desiredProbability) {

     currentProbability = 0;
     probabilityHelper = 365/366; //this is to keep track of the 365/366 * 364/366 *...
     dayCount = 364; //remove first two for ease of setting up the math
     threshold = desiredProbability;
     thresholdCheck = false;
     peopleCount = 2; //because 366/366 and 365/366

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
  }

birthdayProblem(0.5)

/**
 * At 50% probability: 
 * Minimum people in the room: 23
 * Probability: 0.5063230118194602    
 * 
 * At 70%:
 * Minimum people in the room: 30
 * Probability: 0.7053034120089918
 * 
 * At 80%:
 * Minimum people in the room: 35
 * Probability: 0.8134984055409928
 * 
 * At 90%:
 * Minimum people in the room: 41
 * Probability: 0.9025070829944282
 * 
 * At 95%:
 * Minimum people in the room: 47
 * Probability: 0.9543723261702582
 * 
 * At 98%:
 * Minimum people in the room: 53
 * Probability: 0.980921414805715
 * 
 * At 99%:
 * Minimum people in the room: 58
 * Probability: 0.9915487639402908
 * 
 * At 100% (1.0):
 * Minimum people in the room: 154
 * Probability: 1
 */


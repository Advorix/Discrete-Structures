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


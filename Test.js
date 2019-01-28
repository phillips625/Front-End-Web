const moment = require('moment');


function compareTwoDates(firstDate, lastDate) {
  if (firstDate.date < lastDate.date) {
    return 1;
  }
  if (firstDate.date > lastDate.date) {
    return -1;
  }
  return 0;
}


function meanAnnualMileage(previousDates) {
  
  previousDates.sort(compareTwoDates);
  let totalMileage = 0;

  previousDates = previousDates.filter(a => {
    return (a.data.passed);
  });

  for (let i = 0; i < previousDates.length - 1; i++) {
    let yearlyMileage = previousDates[i].data.mileage - previousDates[i + 1].data.mileage;
    totalMileage += yearlyMileage;
  }

  return totalMileage / (previousDates.length - 1);
}


function approximateCurrentMileage(previousDates) {
  //Previous dates in chronological order
  previousDates.sort(compareTwoDates);
  let averageDailyMiles = meanAnnualMileage(previousDates) / 365;

  let lastMOTDate = moment(previousDates[0].date, "YYYY-M-D");
  let daysSinceLastMOT =  moment().diff(lastMOTDate, 'days');
  
  let approximateMileagePriorToLastMOT = averageDailyMiles * daysSinceLastMOT;
  let totalMileage = previousDates[0].data.mileage + approximateMileagePriorToLastMOT;

  return totalMileage;

}

console.log('Mean annual mileage is:', meanAnnualMileage(previousDates));
console.log('Approximate current mileage is:', approximateCurrentMileage(previousDates));
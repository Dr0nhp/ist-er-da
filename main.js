function generateDays() {
    const timeTable = [0, 3, 1, 2, 3, 2, 2]
    let currentDay = new Date().getDay();
    return [currentDay, timeTable]
}


function hereToday(currentDay, timeTable) {
    if (timeTable[currentDay] != 1) {
        return "Sorry, nein";
    }
    else {
        return "Jawollo, BR BR BR";
    }
}

function nextTíme(currentDay, timeTable) {
    const daysWithSchedule = timeTable.reduce((accumulator, value, index) => {
      if (value === 1) {
        accumulator.push(index);
      }
      return accumulator;
    }, []);
  
    if (daysWithSchedule.length < 1) {
      return 9999;
    } else if (daysWithSchedule.length === 1) {
      return (daysWithSchedule[0] - currentDay) % 7;
    } else {
      const dayDifferences = daysWithSchedule.map((day) => (day - currentDay) % 7);
      return Math.min(...dayDifferences);
    }
  }

function main() {
    const helper = generateDays()
    document.getElementById("answer-1").innerHTML = hereToday(currentDay, timeTable);
    document.getElementById("answer-2").innerHTML = nextTíme(currentDay, timeTable);
}
main();

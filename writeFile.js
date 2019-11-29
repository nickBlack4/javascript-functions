/**
 * Here was a script I used to add double quotes to the keys in roomData.
 * 
 * It outputs to a file called Output.json.
 * 
 * JSON.stringify takes the arguments with the third '\t' preserving white space for readability
 */

// Requiring fs module in which writeFile function is defined.
const fs = require('fs')

const roomData = [
  {
    roomNumber: "C1",
    isVacant: false,
    currentLOS: "5",
    expectedLOS: "4",
    orders: [
      {
        icon: "TESTS/PROCEDURES",
        tableVals: { Type: "X Ray", Unit: "Ortho", TimeSinceOrder: "3.5 hr", Status: "Red" }
      },
      {
        icon: "TRANSPORT",
        tableVals: { Type: "Wheelchair", Unit: "GenMed", TimeSinceOrder: "30 min", Status: "Gray" }
      },
      {
        icon: "CONSULTS",
        tableVals: { Type: "GI", Unit: "Ortho", TimeSinceOrder: "30 min", Status: "Gray" }
      },
      {
        icon: "BED_PLACEMENT",
        tableVals: { Type: "Ortho", Unit: "GenMed", TimeSinceOrder: "2.75 hr", Status: "Yellow" }
      }
    ]
  },

  {
    roomNumber: "C4",
    isVacant: true,
    orders: [
      {
        icon: "EVS",
        status: "Red",
        tableVals: { Type: "Gen", Unit: "GenMed", TimeSinceOrder: "1 hr", Status: "Red" }
      },
      {
        icon: "EVS",
        status: "Gray",
        tableVals: { Type: "Gen", Unit: "GenMed", TimeSinceOrder: "45 min", Status: "Gray" }
      }
    ]
  },
]

// Write data in 'Output.txt'
fs.writeFile('Output.json', JSON.stringify(roomData, null, '\t'), (err) => {
  // in case of an error, throw err
  if (err) throw err;
});
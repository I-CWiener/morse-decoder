const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

const decode = (expr) => {
  const num = 10;
  let morseArr = [];
  let arr1 = [];
  let arr2 = [];
  let hmString = "";
  RR = expr
    .split(" ")
    .map((a) => {
      if (a.length >= num) {
        let q = [];
        a.split("").forEach((z, n) => {
          if ((n + 1) % num === 0) {
            q.push(z, " ");
          } else {
            q.push(z);
          }
        });
        return q.join("").trim();
      }
      return a;
    })
    .join(" ")
    .split(" ");

  for (let i = 0; i < RR.length; i++) {
    RR[i] = RR[i].replace(/^0+/, "");
  }

  for (let i = 0; i < RR.length; i++) {
    RR[i] = RR[i].split("");
    for (let j = 0; j < RR[i].length; j = j + 2) {
      if (RR[i][j] === "1" && RR[i][j + 1] === "0") {
        arr1.push(".");
      } else if (RR[i][j] === "1" && RR[i][j + 1] === "1") {
        arr1.push("-");
      } else {
        arr1.push(" ");
        j = j + 10;
      }
    }
    arr1.join(" ");
    arr2.push(arr1);
    arr1 = [];
  }
  for (let i = 0; i < arr2.length; i++) {
    arr2[i] = arr2[i].join("");
  }
  for (let symbol of arr2) {
    hmString = symbol !== " " ? hmString + MORSE_TABLE[symbol] : hmString + " ";
  }
  return hmString;
};

module.exports = {
  decode,
};

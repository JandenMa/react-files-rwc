const chars = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

export const GenerateUid = n => {
  let arr = [];
  n = n < 12 ? 12 : n;
  n = n % 2 === 0 ? n : n + 1;
  for (let i = 0; i < n / 2; i++) {
    let rand = Math.floor(Math.random() * 35);
    arr.push(i % 3 === 0 ? chars[rand] : chars[rand].toLowerCase());
    if (i !== 0 && i % 5 === 0) arr.push("-");
  }
  for (let i = n / 2 + 1; i < n; i++) {
    let rand = Math.ceil(Math.random() * 35);
    arr.push(i % 3 !== 0 ? chars[rand] : chars[rand].toLowerCase());
    if (i !== 0 && i % 7 === 0 && i !== n - 1) arr.push("-");
  }
  return arr.join("");
};

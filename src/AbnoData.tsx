// 0: Name
// 1: Risk Level
// 2: Qliphoth Counter: -1 = X
// 3: Max Enkephalin
// 4: Capable of Breach
// 5: Image path to abnormality portrait
const abnoList: [string, string, number, number, boolean, string][] = [
  ["One Sin and Hundreds of Good Deeds", "Zayin", -1, 10, false, "src/assets/abnoimages/OneSin.webp"],
  ["Happy Teddy Bear", "He", -1, 15, false, "src/assets/abnoimages/HappyTeddyBear.webp"],
  ["Big Bird", "Waw", 5, 20, true, "src/assets/abnoimages/BigBird.webp"],
  ["Punishing Bird", "Teth", 4, 12, true, "src/assets/abnoimages/PunishingBird.webp"],
  ["Judgement Bird", "Waw", 2, 24, true, "src/assets/abnoimages/JudgementBird.webp",],
  ["Fairy Festival", "Zayin", -1, 10, false, "src/assets/abnoimages/FairyFestival.webp"],
  ["Blue Star", "Aleph", 2, 33, true, "src/assets/abnoimages/BlueStar.webp"],
];

const abnoNameList = ["One Sin and Hundreds of Good Deeds", "Happy Teddy Bear", "Big Bird", "Punishing Bird", "Judgement Bird", "Fairy Festival", "Blue Star"];

export { abnoNameList };
export default abnoList;
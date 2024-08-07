// 0: Name
// 1: Risk Level
// 2: Qliphoth Counter: -1 = X
// 3: Max Enkephalin
// 4: Capable of Breach
// 5: Image path to abnormality portrait
const abnoList: [string, string, number, number, boolean, string][] = [
  ["One Sin and Hundreds of Good Deeds", "Zayin", -1, 10, false, "abnoimages/OneSin.webp"],
  ["Happy Teddy Bear", "He", -1, 15, false, "abnoimages/HappyTeddyBear.webp"],
  ["Big Bird", "Waw", 5, 20, true, "abnoimages/BigBird.webp"],
  ["Punishing Bird", "Teth", 4, 12, true, "abnoimages/PunishingBird.webp"],
  ["Judgement Bird", "Waw", 2, 24, true, "abnoimages/JudgementBird.webp",],
  ["Fairy Festival", "Zayin", -1, 10, false, "abnoimages/FairyFestival.webp"],
  ["Blue Star", "Aleph", 2, 33, true, "abnoimages/BlueStar.webp"],
];

const abnoNameList = ["One Sin and Hundreds of Good Deeds", "Happy Teddy Bear", "Big Bird", "Punishing Bird", "Judgement Bird", "Fairy Festival", "Blue Star"];

export { abnoNameList };
export default abnoList;
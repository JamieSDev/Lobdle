import abnoList from "./AbnoData";

class Abno {
  name: string;
  riskLevel: string;
  qliphothCounter: number;
  maxEnkephalin: number;
  canBreach: boolean;
  image: string;

  constructor(id?: number) {
    if (id !== undefined) {
      this.name = abnoList[id][0];
      this.riskLevel = abnoList[id][1];
      this.qliphothCounter = abnoList[id][2];
      this.maxEnkephalin = abnoList[id][3];
      this.canBreach = abnoList[id][4];
      this.image = abnoList[id][5];
    } else {
      let i = Math.floor(Math.random() * abnoList.length);
      this.name = abnoList[i][0];
      this.riskLevel = abnoList[i][1];
      this.qliphothCounter = abnoList[i][2];
      this.maxEnkephalin = abnoList[i][3];
      this.canBreach = abnoList[i][4];
      this.image = abnoList[i][5];
    }
  }
}

export default Abno;

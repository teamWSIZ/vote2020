export class VoteData {
  electionid: number;
  choiceid: number;
  value: number;

  constructor(electionid: number, choiceid: number, value: number) {
    this.electionid = electionid;
    this.choiceid = choiceid;
    this.value = value;
  }
}

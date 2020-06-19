export class Choice {
  choiceid: number;
  electionid: number;
  title: string;
  description: string
  url: string
  selected = false;


  constructor(choiceid: number, electionid: number, title: string, description: string, url: string) {
    this.choiceid = choiceid;
    this.electionid = electionid;
    this.title = title;
    this.description = description;
    this.url = url;
  }
}

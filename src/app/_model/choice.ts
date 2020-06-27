export class Choice {
  choiceid: number;
  electionid: number;
  title: string;
  description: string
  url: string
  selected = false;
  visibleid: string;


  constructor(choiceid: number, electionid: number, title: string, description: string, url: string, visibleid: string) {
    this.choiceid = choiceid;
    this.electionid = electionid;
    this.title = title;
    this.description = description;
    this.url = url;
    this.visibleid = visibleid;
  }

}

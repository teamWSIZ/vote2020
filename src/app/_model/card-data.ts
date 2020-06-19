export class CardData {
  //paczka -- cała informacja potrzebna do wyświetlenia kartki produktowej, lub wpisu na blogu
  id: number;
  categoryid: number;
  title: string;
  text: string;
  url: string;
  likes: number;



  constructor(id: number = 0, categoryid: number = 0, title: string='--', text: string='', url: string, likes: number) {
    this.id = id;
    this.categoryid = categoryid;
    this.title = title;
    this.text = text;
    this.url = url;
    this.likes = likes;
  }
}

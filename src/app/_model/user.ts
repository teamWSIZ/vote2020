export class User {
  studentid: number;
  album: string;
  imie: string;
  nazwisko: string;
  wdauth: string;
  teacher: boolean;

  constructor(studentid: number, album: string, imie: string, nazwisko: string, wdauth: string, teacher: boolean) {
    this.studentid = studentid;
    this.album = album;
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wdauth = wdauth;
    this.teacher = teacher;
  }
}

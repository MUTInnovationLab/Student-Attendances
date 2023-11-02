import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.page.html',
  styleUrls: ['./lecture.page.scss'],
})
export class LecturePage implements OnInit {
  showAddCard: boolean = false;
  

  contact_nom: string = '';
  contact_email: string = '';
  contact_sujet: string = '';
  contact_message: string = '';
  constructor() { }

  ngOnInit() {
  }

}

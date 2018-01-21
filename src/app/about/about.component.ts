import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info = {
    name : 'Amin Boudeffa',
    email : 'aminboudeffa@gmail.com',
    tel : 698914249
  };

  comments = [
    { date : new Date(), message : 'AAA' },
    { date : new Date(), message : 'BBB' },
    { date : new Date(), message : 'CCC' }
  ];

  commentaire = {date : null, message : ''};

  constructor() { }

  ngOnInit() {
  }

  onAddCommentaire(){
    this.commentaire.date = new Date();
    this.comments.push(this.commentaire);
  }
}

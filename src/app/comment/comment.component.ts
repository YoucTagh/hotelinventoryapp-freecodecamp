import { ActivatedRoute } from '@angular/router';
import { CommentService } from './comment.service';
import { Component, OnInit } from '@angular/core';
import { Comment } from './comment';
import { map, pluck } from 'rxjs';
@Component({
  selector: 'hinv-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  // comments$ = this.commentService.getComments();

  comments$ = this.activatedRoute.data.pipe( map((data)=> data['comments']))
  constructor(private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
  //  this.activatedRoute.data.subscribe((data)=>{
  //    console.log(data['comments']);
  //  })
  }
}

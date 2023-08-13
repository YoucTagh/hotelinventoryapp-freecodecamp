import { CommentService } from './../comment.service';
import { Injectable } from '@angular/core';
import { Comment } from '../comment';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Resolve,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentGuard implements Resolve<Comment[]> {
  constructor(private commentService: CommentService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Comment[] | Observable<Comment[]> | Promise<Comment[]> {
    return this.commentService.getComments();
  }
}

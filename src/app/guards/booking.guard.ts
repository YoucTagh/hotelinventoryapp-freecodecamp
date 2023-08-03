import { BookingComponent } from './../booking/booking.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class BookingGuard implements CanDeactivate<BookingComponent> {
  
  canDeactivate(
    component: BookingComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(!component.bookingForm.pristine){
        this.openSnackBar()
        return false;
      }
    
    return true;
  }

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.open("Dirty stuff","Continue")}
  
}

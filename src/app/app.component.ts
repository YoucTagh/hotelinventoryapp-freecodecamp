import { LocalStorageToken } from './localstorage.token';
import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'hotelinventoryapp-freecodecamp';

  @ViewChild('header', { read: ViewContainerRef })
  vcr!: ViewContainerRef;

  constructor(@Inject(LocalStorageToken) private localStorage: Storage) {}

  ngOnInit():void{
    this.localStorage.setItem('name','Youc Tagh')
  }

  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(HeaderComponent);
    componentRef.instance.title = 'Go man!';
  }
}

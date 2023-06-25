import { InitService } from './init.service';
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
import { ConfigService } from './shared/services/config/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'hotelinventoryapp-freecodecamp';

  @ViewChild('header', { read: ViewContainerRef })
  vcr!: ViewContainerRef;

  constructor(
    @Inject(LocalStorageToken) private localStorage: Storage,
    private initService: InitService,
    private configService: ConfigService,
    private router:Router
  ) {
    console.log(this.initService.config);
    
  }

  ngOnInit(): void {
    this.localStorage.setItem('name', 'Youc Tagh');
    // this.router.events.subscribe((event)=>{
    //   console.log(event);
    // })
    this.router.events.pipe(
      filter((event)=> event instanceof NavigationStart)
    ).subscribe((event)=>{
      console.log('Navigation Started');
    })

    this.router.events.pipe(
      filter((event)=> event instanceof NavigationStart)
    ).subscribe((event)=>{
      console.log('Navigation Completed');
    })
  }

  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(HeaderComponent);
    // componentRef.instance.title = 'Go man!';
  }
}

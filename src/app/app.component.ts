import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'hotelinventoryapp-freecodecamp';

  @ViewChild('header',{read:ViewContainerRef})
  vcr!:ViewContainerRef;

  ngAfterViewInit(): void {
      const componentRef= this.vcr.createComponent(HeaderComponent);
      componentRef.instance.title = 'Go man!'
  }
}

import { RouteConfigToken } from './routeConfig.service';
import { Inject, Injectable } from '@angular/core';
import { RouteConfig } from './routeConfig';

@Injectable({
  providedIn: 'any',
})
export class ConfigService {
  constructor(@Inject(RouteConfigToken) private configToken: RouteConfig) {
    console.log('ConfigService');
    console.log(configToken);
    
  }
}

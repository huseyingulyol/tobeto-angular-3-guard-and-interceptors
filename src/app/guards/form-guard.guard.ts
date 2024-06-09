import { Injectable } from '@angular/core';
import { CanActivateFn, CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export const FormGuard: CanDeactivateFn<CanComponentDeactivate> = (component:CanComponentDeactivate) => 
{
  return component.canDeactivate ? component.canDeactivate() : true;
}
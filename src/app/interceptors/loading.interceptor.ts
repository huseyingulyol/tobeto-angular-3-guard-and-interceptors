import { HttpInterceptorFn } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';


export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const url = req.url.toLowerCase();
  const loadingService = inject(LoadingService);
  if (url.includes('/products') && req.method == 'GET') {
    loadingService.show();
  }
  return next(req).pipe(
    finalize(() => {
      loadingService.hide();
    }),
  );
};
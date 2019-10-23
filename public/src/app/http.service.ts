import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }
}
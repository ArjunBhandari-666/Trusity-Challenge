import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor(private http: HttpClient) { }

  getChartData(): Observable<any> {
    return this.http.get('https://3fiphfw4okckjgqpydv7kffd2y0pwnce.lambda-url.eu-north-1.on.aws/').pipe(
      map((response: any) => response.data) // I think this will deprecate soon
    );
  }
}

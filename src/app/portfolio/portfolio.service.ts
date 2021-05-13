import { HttpClient } from '@angular/common/http';
import { IProject } from '../interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor(private httpClient: HttpClient) {}

  getProjects(): Observable<IProject[]> {
    return this.httpClient
      .get<IProject[]>(`${environment.baseURL}/api/project`)
      .pipe(map((res) => res));
  }
}

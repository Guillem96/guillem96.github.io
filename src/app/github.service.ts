import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private BASE_URL = "https://api.github.com";

  private REPOS_IDS = [
    'argon-nx', 'efficientdet-tf', 'zsl-pytorch', 'spynet-pytorch', 
    'rl-examples-jax', 'pointer-nn-pytorch', 'jax-hidden-markov-model',
    'tensorflow-challenge'
  ];
  constructor(private http: HttpClient) { }

  public getRepositories(): Observable<any> {
    const urls = this.REPOS_IDS.map(o => `${this.BASE_URL}/repos/Guillem96/${o}`);
    const requests = urls.map(o => this.http.get(o));
    return forkJoin(requests);
  }
}

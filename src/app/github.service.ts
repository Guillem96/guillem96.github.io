import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private BASE_URL = "https://api.github.com/graphql";

  constructor(private http: HttpClient) { }

  public getRepositories(): Observable<any> {
    // Generated with btoa(username:token)
    const encodedCreds = "Basic " + 'R3VpbGxlbTk2OjdlYzY0ZjFiYTg0ZjkzZmJhNTA3ZDE3MTUyZjhhYmQ5YTlhZTE1Njg=';
    const header = {headers: new HttpHeaders({Authorization: encodedCreds})};

    const query = `
      query {
        user(login:"Guillem96") {
          pinnedItems(first: 10, types: [REPOSITORY, GIST]) {
            totalCount
            edges {
              node { 
                ... on Repository {
                  name
                  description
                  stargazerCount
                  forkCount
                  primaryLanguage {
                    name
                  }
                }
              }
            }
          }
        }
      }`;

    return this.http.post(this.BASE_URL, {query}, header).pipe(
      map(res => res['data']['user']['pinnedItems']['edges'].map(o => o.node))
    );
  }
}

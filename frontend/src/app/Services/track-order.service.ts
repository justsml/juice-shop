import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { catchError, map } from 'rxjs/operators'
import { challengeApiTokenHeader } from './challenge-api-token'

@Injectable({
  providedIn: 'root'
})
export class TrackOrderService {
  private readonly http = inject(HttpClient)

  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/rest/track-order'

  find (params: string) {
    params = encodeURIComponent(params)
    return this.http.get(`${this.host}/${params}`, { headers: challengeApiTokenHeader }).pipe(map((response: any) => response), catchError((error) => { throw error }))
  }
}

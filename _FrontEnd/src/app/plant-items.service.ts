import { Injectable } from '@angular/core';
import {IPlantItem} from './model/plant-item';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {ObjectUnsubscribedError, Observable, of, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PlantItemsService {

  private dataUri = 'http://localhost:3000/api/plantItems';

  constructor(private http: HttpClient) { }

  getPlantItems(): Observable<IPlantItem[]>{
    console.log('Getting plant items...');

    return this.http.get<IPlantItem[]>(`${this.dataUri}?limit=5`)
      .pipe(catchError(this.handleError));

  }

  addPlantItem(plantItem: IPlantItem): Observable<IPlantItem> {
    return this.http.post<IPlantItem>(this.dataUri, plantItem)
      .pipe(
        catchError(this.handleError)
      );
  }

  updatePlantItem(id: string, plantItem: IPlantItem): Observable<IPlantItem>{
    console.log('Updating ' + id);
    let updateableURI: string = this.dataUri + '/' + id;
    return this.http.put<IPlantItem>(updateableURI, plantItem)
      .pipe(
        catchError(this.handleError)
      );
  }

  deletePlantItem(id: string){
    let deletableURI: string = this.dataUri + '/' + id;
    return this.http.delete(deletableURI).pipe(catchError(this.handleError));
  }


  // Error handling from Angular docs
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}

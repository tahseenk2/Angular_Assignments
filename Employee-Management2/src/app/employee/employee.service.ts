import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './employee';
import { Observable, throwError, of} from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'api/employees';
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
     return this.http.get<Employee[]>(this.url).pipe(
       tap(data => console.log(JSON.stringify(data))),
     );
  }


  getProduct(id: number): Observable<Employee> {
    if (id === 0) {
      return of(this.initializeEmployee());
    }
    const url = `${this.url}/${id}`;
    return this.http.get<Employee>(url)
      .pipe(
        tap(data => console.log('getProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }


  private handleError( err ) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }


  createEmployee(employee: Employee): Observable<Employee> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    employee.id = null;
    return this.http.post<Employee>(this.url, employee, { headers })
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }


  updateEmployee(employee: Employee): Observable<Employee> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.url}/${employee.id}`;
    console.log(employee);
    return this.http.put<Employee>(url, employee, { headers })
      .pipe(
        tap(() => console.log('updateEmployee: ' + employee.id)),
        // Return the product on an update
        map(() => employee),
       // catchError(this.handleError)
      );
  }

  deleteEmployee(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.url}/${id}`;
    return this.http.delete<Employee>(url, { headers })
      .pipe(
        tap(data => console.log('deleteEmployee: ' + id)),
        catchError(this.handleError)
      );
  }


  private initializeEmployee(): Employee {
    return {
      id: 0,
      firstname: null,
      lastname:null,
      email:null,
      cno:null,
      address:null,
      username:null,
      password:null,
      gender:null,
      qualification: null,
      experience: null,
      languages: [''],
    };
  }


}

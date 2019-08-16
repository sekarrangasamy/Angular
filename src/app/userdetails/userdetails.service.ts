import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  private resourceUrl = environment.resourceUrl;
  constructor(private http:HttpClient) { }

  public getPersonalDetails():Observable<any>{
    return this.http.get(this.resourceUrl +'/personal');
  }

  public savePersoanlDetails(obj:any):Observable<any>{
    return this.http.post(this.resourceUrl +'/personal',obj);
  }
  
  public getById(id):Observable<any>{
    return this.http.get(this.resourceUrl + '/personalist/'+id)
  }

  public updatePersonal(id,data):Observable<any>{
    return this.http.put(this.resourceUrl + '/personal/' + id,data)
  }

  public deleteData(id):Observable<any>{
    return this.http.delete(this.resourceUrl + '/personalist/' + id)
  }
}

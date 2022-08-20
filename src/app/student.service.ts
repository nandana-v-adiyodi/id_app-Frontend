import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }



  Register(data:any){
  
    console.log(data.data.name)
    return this.http.post<any>("http://localhost:3000/register",data)
    
  }
getStatus(status:any){
  return this.http.post<any>("http://localhost:3000/register",status)
}



  getID(id:any){
    return this.http.get<any>("http://localhost:3000/register"+id)
  }

  // getCourses(){
  //   return this.http.get("http://localhost:5000/courses")
  // }
  gettoken(){
       return localStorage.getItem("token")
    }

}

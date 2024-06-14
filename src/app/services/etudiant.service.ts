import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EtudiantService {
  constructor(private http: HttpClient) {}
  // ajout etudiant
  addEtudiant(data: any): Observable<any> {
    return this.http.post('http://localhost:5000/etudiants', data);
  }
  // modifier etudiant
  updateEtudiant(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:5000/etudiants/${id}`, data);
  }
  // affichage liste etudiant
  lisEtudiant(): Observable<any> {
    return this.http.get('http://localhost:5000/etudiants');
  }
  // suppression etudiant
  deleteEtudiant(id: number): Observable<any> {
    return this.http.delete(`http://localhost:5000/etudiants/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Tutor } from '../interfaces/tutor-interface';
import { async } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GetTutorInfoService {

  http = inject(HttpClient)

  constructor() { }

  getTutorInfo(id: any) {
    return this.http.get<Tutor>(`http://127.0.0.1:8003/tutors/${id}`)
  }
}

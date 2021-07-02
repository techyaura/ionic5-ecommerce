import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { IUser, ISession, ISessionUser } from '../../models';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'any'
})
export class AuthService {

  private session: ISession = {
    token: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
    user: {
      email: 'techyaura@gmail.com',
    }
  };

  constructor(
    private storageService: StorageService
  ) { }

  login(body: IUser): Observable<ISession>{
    if(body.email === this.session.user.email && body.password === 'techyaura'){
      return of(this.session);
    }
    throw throwError('Invalid Credentials');
  }

  profile(): Observable<ISessionUser> {
    return of(this.session.user);
  }

  saveProfile(body: ISessionUser): Observable<ISessionUser>{
    this.session = {
      ...this.session,
      user: {
        ...this.session.user,
        ...body
      }
    }
    this.storageService.set('__session', this.session.user); // [TODO]- will be removed
    return of(this.session.user); 
  }
}

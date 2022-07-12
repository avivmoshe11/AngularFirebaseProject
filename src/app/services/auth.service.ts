import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  authState,
  User,
} from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User | null>;

  user: User | null = null;
  isLogged: boolean = false;

  constructor(private auth: Auth) {
    this.user$ = authState(this.auth);

    this.user$.subscribe((user) => {
      this.user = user;
      this.isLogged = Boolean(user);
    });
  }

  createUser(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  loginEmail(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginGoogle() {
    return signInWithRedirect(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }
}

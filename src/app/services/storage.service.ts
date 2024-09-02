import { Injectable } from '@angular/core';
import { localUser } from '../models/localUser';

@Injectable({
  providedIn: "root",
})
export class StorageService {

  private STORAGE_KEYS = {
    localUser: 'localUser'
  };

  getLocalUser(): localUser {
    let usr = localStorage.getItem(this.STORAGE_KEYS.localUser);
    if (usr == null) {
      return null;
    } else {
      return JSON.parse(usr);
    }
  }

  setLocalUser(obj: localUser) {
    if (obj == null) {
      localStorage.removeItem(this.STORAGE_KEYS.localUser);
    } else {
      localStorage.setItem(this.STORAGE_KEYS.localUser, JSON.stringify(obj));
    }
  }

  getUserProfile(): string {
    const user = this.getLocalUser();
    return user ? user.role : null;
  }

  getUserProfileName(): string {
    const profile = this.getUserProfile();
    switch(profile) {
      case 'ADMIN':
          return 'Administrador';
      case 'VENDEDOR':
        return 'Vendedor';
      case 'OFICINA':
        return 'Oficina';
      default:
        return 'Cliente';
    }
  }
}

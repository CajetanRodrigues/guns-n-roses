import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  httpOptions = {
    headers: new HttpHeaders(
      {
        Authorization: 'Bearer BQBK_fvG1QJw-J362dOzhs9zQ-DW5YTPPr1l8fwpIH8kaEIAb6AxXJQOy0PEOglfcjQ4aAj7auSSxsTgkAI_z9UtTT-Kzg44iGbzfYFiCSEIC8zmHVENayzluBg896EgOszqgTZUWnpX8NiXG-mSSqWp3zZxa4bdzl17pis5PknKs92Ajrnh8xbUFtpI6IUY6vOSSYxrTZCvyYfmfxitIqUY4OWV3Gft1UTQuF48XWttf4xaCEuPHQhBmT9pXLZGFJnZMZPKiHzBfq_PJRd6fma_YI2mUCCrJ5sDNuh-5kelEqs'
      })
  };
  token = '';
  constructor() { 
    
  }
}

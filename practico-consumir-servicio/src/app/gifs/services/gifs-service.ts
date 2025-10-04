import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GiphyResponse } from '../interfaces/giphy.interface';
import { environment } from '@env/environment.development';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/git.mapper';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  
  private http = inject(HttpClient);
  trandingGifs = signal<Gif[]>([]);

  constructor() { 
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    return this.http.get<GiphyResponse>(`${environment.urlBase}/gifs/trending`, {
      params: {
        api_key: environment.apikey,
        limit: '40',
  }
    }).subscribe( (response) => {
      // console.log(response.data[0].images.original.url);
      const gifs: Gif[] = GifMapper.mapGiphyItemsToGifArray(response.data);
      this.trandingGifs.set(gifs);
      console.log(this.trandingGifs());
    });
  }
}

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
  searchGifs = signal<Gif[]>([]);
  searchHistory = signal<string[]>([]);

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

  searchGifsByTerm(term: string) {
    if (!term.trim()) return;
    
    const currentHistory = this.searchHistory();
    if (!currentHistory.includes(term)) {
      const newHistory = [term, ...currentHistory.slice(0, 9)];
      this.searchHistory.set(newHistory);
    }

    return this.http.get<GiphyResponse>(`${environment.urlBase}/gifs/search`, {
      params: {
        api_key: environment.apikey,
        q: term,
        limit: '40',
      }
    }).subscribe((response) => {
      const gifs: Gif[] = GifMapper.mapGiphyItemsToGifArray(response.data);
      this.searchGifs.set(gifs);
      console.log('Search results:', this.searchGifs());
    });
  }

  clearSearchResults() {
    this.searchGifs.set([]);
  }
}

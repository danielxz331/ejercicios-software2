import { Component, inject } from '@angular/core';
import { GifsService } from '@app/gifs/services/gifs-service';
import { GifList } from '@app/gifs/components/gif-list/gif-list';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.html',
  styles: ``,
  imports: [GifList, FormsModule]
})
export default class SearchPage {
  
  private gifsService = inject(GifsService);
  
  searchTerm = '';
  
  get searchGifs() {
    return this.gifsService.searchGifs;
  }
  
  get searchHistory() {
    return this.gifsService.searchHistory;
  }
  
  onSearchGif() {
    if (this.searchTerm.trim()) {
      this.gifsService.searchGifsByTerm(this.searchTerm);
    }
  }
  
  onSearchFromHistory(term: string) {
    this.searchTerm = term;
    this.gifsService.searchGifsByTerm(term);
  }
  
  clearSearch() {
    this.searchTerm = '';
    this.gifsService.clearSearchResults();
  }
}

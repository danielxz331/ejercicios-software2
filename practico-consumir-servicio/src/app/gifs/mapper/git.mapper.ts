import { GiphyItem } from "../interfaces/giphy.interface";
import { Gif } from "../interfaces/gif.interface";

export class GifMapper {
    static mapeGiphyItemToGif(item: GiphyItem): Gif {
        return {
            id: item.id,
            title: item.title,
            url: item.images.original.url
        };
    }

    static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] {
        return items.map(this.mapeGiphyItemToGif);
    }
}
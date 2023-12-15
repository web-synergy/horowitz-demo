import { create } from 'zustand';
import { getHomeData } from '../api';

interface IHomeData {
  banner: any;
  news: any[];
  sponsors: any[];
  winner: any[];
  video: any[];
  quote: any;
  loading: boolean;
  error: any;
  getData: (language: string, draft?: boolean) => Promise<void>;
  getPreview: (response: any) => any;
}

export const useHomeData = create<IHomeData>(set => ({
  banner: {},
  news: [],
  sponsors: [],
  winner: [],
  video: [],
  quote: {},
  loading: false,
  error: '',

  getPreview: response => {
    set({
      banner: response.banner,
      news: response.news,
      quote: response.quote,
      winner: response.winner,
      video: response.videos,
      sponsors: response.sponsors,
    });
  },
  getData: async (language, draft) => {
    set({ loading: true });
    try {
      const response = await getHomeData(language, draft);
      set({
        banner: response.banner,
        news: response.news,
        quote: response.quote,
        winner: response.winner,
        video: response.videos,
        sponsors: response.sponsors,
      });

      set({ error: null });
    } catch (error: unknown) {
      set({
        error: 'Request error, please try again later',
        loading: false,
      });
    } finally {
      set({ loading: false });
    }
  },
}));

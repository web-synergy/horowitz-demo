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
  getData: (language: string) => Promise<void>;
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

  getData: async language => {
    set({ loading: true });
    try {
      const response = await getHomeData(language);
      console.log(response);
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

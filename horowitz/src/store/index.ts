import { create } from 'zustand';
import { getHomeData } from '../api';
import { localStorageKey } from '../assets/constants';

interface IHomeData {
  banner: any;
  allNews: any[];
  sponsors: any[];
  winner: any[];
  video: any[];
  quote: any;
  loading: boolean;
  error: any;
  getData: (language: string) => Promise<void>;
}

export const useHomeData = create<IHomeData>((set) => ({
  banner: {},
  allNews: [],
  sponsors: [],
  winner: [],
  video: [],
  quote: {},
  loading: false,
  error: '',

  getData: async (language) => {
    set({ loading: true });
    try {
      const response = await getHomeData(language);
      set({
        banner: response.banner,
        allNews: response.allNews,
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

interface ILangData {
  lang: string;
  setLang: (lang: string) => void;
}
const defaultLang = localStorage.getItem('locale') || 'ua';

export const useLangData = create<ILangData>((set) => ({
  lang: defaultLang,
  setLang: (lang: string) => {
    localStorage.setItem(localStorageKey, lang);
    set({ lang: lang });
  },
}));

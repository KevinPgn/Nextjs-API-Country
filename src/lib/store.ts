import {create} from 'zustand';

interface Country {
  filterBySearch: string;
  filterByRegion: string;
  setFilterBySearch: (search: string) => void;
  setFilterByRegion: (region: string) => void;
}

export const useFilter = create<Country>((set) => ({
  filterBySearch: '',
  filterByRegion: '',
  setFilterBySearch: (search: string) => set({filterBySearch: search}),
  setFilterByRegion: (region: string) => set({filterByRegion: region}),
}));
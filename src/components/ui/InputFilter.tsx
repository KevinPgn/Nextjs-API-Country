"use client"
import { Input } from "@/components/ui/input";
import { useFilter } from "@/lib/store";
import { Search } from "lucide-react";
import { useDebounce } from 'use-debounce';
import React from 'react';

export const InputFilter = () => {
  const setFilterBySearch = useFilter((state) => state.setFilterBySearch);
  const filterBySearch = useFilter((state) => state.filterBySearch);
  const [debouncedValue] = useDebounce(filterBySearch, 500); // Adjust the debounce delay as per your requirement
  
  return (
    <>
      <div className="w-2/3 md:w-[500px] p-3 pl-5 flex items-center gap-2 shadow shadow-slate-200 dark:shadow-slate-800 dark:bg-slate-900 dark:text-slate-50 dark:placeholder-slate-300">
        <Search size={20} className="cursor-pointer" />
        <Input
          className="bg-transparent border-none w-full focus:outline-none text-md focus:ring-0 focus:border-0"
          placeholder="Search for a country..."
          onChange={e => setFilterBySearch(e.target.value)}
        />
      </div>
    </>
  );
};
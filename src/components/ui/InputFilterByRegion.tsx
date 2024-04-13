"use client"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useFilter } from "@/lib/store";

import React from 'react';

export const InputFilterByRegion = () => {

  const setFilterByRegion = useFilter((state) => state.setFilterByRegion);
  const filterByRegion = useFilter((state) => state.filterByRegion);

  return (
    <Select className="p-5" 
    onValueChange={(value: any) => setFilterByRegion(value)}
    >
      <SelectTrigger className="w-[200px] p-5">
        <SelectValue placeholder="Filter By Region" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="All">All Region</SelectItem>
          <SelectItem value="Africa">Africa</SelectItem>
          <SelectItem value="Americas">Americas</SelectItem>
          <SelectItem value="Asia">Asia</SelectItem>
          <SelectItem value="Europe">Europe</SelectItem>
          <SelectItem value="Oceania">Oceania</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

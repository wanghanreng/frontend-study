import api from "./axiosinstance";
import type { HotItem } from "../types/zhihu";

export const fetchHotList = () => api.get<{ data: HotItem[] }>("/hot");

export const addHotItem = (item: Partial<HotItem>) => api.post("/hot", item)

export const updateHotItem = (id: number, updatedItem: Partial<HotItem>) => 
    api.put(`/hot/${id}`, updatedItem);

export const deleteHotItem = (id: number) => api.delete(`/hot/${id}`);
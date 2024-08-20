import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:4000" });

// bütün konaklama alanlarını getirir
export const getPlaces = (params) =>
  api.get("/api/places", { params }).then((res) => res.data);

// sadece 1 konkalama alanını getirir
export const getPlace = (id) =>
  api.get(`/api/place/${id}`).then((res) => res.data.place);

// yeni konaklama ekleme
export const addPlace = (data) => api.post(`/api/places`, data);

// konaklamayı kaldırma
export const deletePlace = (id) => api.delete(`/api/place/${id}`);

export const sliceArray = (data, max) => {
  return data.slice(0, max);
};

export const getLocalStorage = (key) => {
  if (typeof window === "undefined") return;
  return JSON.parse(window.localStorage.getItem(key));
};

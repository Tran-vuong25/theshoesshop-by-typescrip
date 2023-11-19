export const IIFE = (fn: () => void) => {
  fn();
};

export const setLocalstorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalstorage = (key: string) => {
  const resp = localStorage.getItem(key);

  if (resp) {
    return JSON.parse(resp);
  }
};

export const removeLocalstorage = (key: string) => {
  localStorage.removeItem(key);
};

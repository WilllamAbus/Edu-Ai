export const getViewedProducts = (): string[] => {
  return JSON.parse(localStorage.getItem("viewedProducts") || "[]");
};

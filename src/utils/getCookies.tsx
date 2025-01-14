export const getCookies = (name: any) => {
  if (!name) return;
  return document.cookie.split("; ").some((cookie) => cookie.startsWith(`${name}=`));
};
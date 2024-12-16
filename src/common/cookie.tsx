type SetCookieFunction = (
  name: string,
  value: string,
  expires?: number,
  path?: string,
  domain?: string,
  secure?: boolean
) => boolean;

const setCookie: SetCookieFunction = (name, value, expires, path, domain, secure) => {
  let cookie = `${name}=${value}`;
  if (expires) {
    const date = new Date();
    date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
    cookie += `; expires=${date.toUTCString()}`;
  }
  if (path) {
    cookie += `; path=${path}`;
  }
  if (domain) {
    cookie += `; domain=${domain}`;
  }
  if (secure) {
    cookie += '; secure';
  }
  document.cookie = cookie;
  return true;
}
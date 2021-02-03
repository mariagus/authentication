export default function jwtDecoder(token) {
  if (token) {
    const arr = token.split(".");
    return JSON.parse(atob(arr[1]));
  }
  return;
}

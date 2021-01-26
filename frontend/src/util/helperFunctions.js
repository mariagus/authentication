export default function jwtDecoder(token) {
  const arr = token.split(".");
  return JSON.parse(atob(arr[1]));
}

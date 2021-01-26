export default function jwtDecoder(token) {
  const parts = token.split(".");
  return JSON.parse(atob(parts[1]));
}

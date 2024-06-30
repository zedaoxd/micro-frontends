export async function countFavorites(): Promise<number> {
  const route = "http://localhost:4000/api/videos/count";

  const response = await fetch(route);

  return await response.json();
}

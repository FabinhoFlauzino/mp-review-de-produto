export async function getReviews() {
  const response = await fetch('https://apis.codante.io/api/reviews-api/reviews')

  if (!response.ok) {
    throw new Error("Erro ao buscar dados")
  }

  const { data } = await response.json()
  return data
}
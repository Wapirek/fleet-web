// ustawia date nastepnego dnia w odpowiednim formacie
export const CreateTomorrowTimeHelper = () => {
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow.toISOString().slice(0, 10)
}

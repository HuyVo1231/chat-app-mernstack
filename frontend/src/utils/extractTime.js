export function convertToVNTime(utcTime) {
  const utcDate = new Date(utcTime)
  const vnDate = new Date(utcDate.getTime() + 7 * 60 * 60 * 1000)

  // Lấy giờ và phút
  const hours = vnDate.getHours().toString().padStart(2, '0')
  const minutes = vnDate.getMinutes().toString().padStart(2, '0')

  return `${hours}:${minutes}`
}

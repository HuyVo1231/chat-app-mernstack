import mongoose from 'mongoose'

export async function connect() {
  try {
    await mongoose.connect(process.env.DATABASE_CONNECT_STRING, {})
    console.log('Đã kết nối thành công đến MongoDB')
  } catch (error) {
    console.log('Kết nối thất bại đến MongoDB', error)
  }
}

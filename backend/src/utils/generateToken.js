import jwt from 'jsonwebtoken'

// Hàm tạo token và thiết lập cookie
const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '15d' // Thời gian hết hạn của token
  })

  // Thiết lập cookie
  res.cookie('jwt', token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // Thời gian sống của cookie
    httpOnly: true, // Chỉ cho phép máy chủ truy cập cookie
    secure: process.env.NODE_ENV === 'production', // Cookie chỉ được gửi qua HTTPS nếu ở môi trường production
    sameSite: 'lax' // Để kiểm tra dễ dàng, có thể thay đổi thành 'strict' nếu cần
  })
}

export { generateTokenAndSetCookie }

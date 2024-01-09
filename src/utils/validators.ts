const isEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return false
  }
  return true
}

const isRecoverpasswordCode = (code: string): boolean => {
  const codeRegex = /^[0-9]{4}$/
  if (!codeRegex.test(code)) {
    return false
  }
  return true
}

export default { isEmail, isRecoverpasswordCode }

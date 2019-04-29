export function isValidUsername(str) {
  const usernameMap = ['admin', 'xinan', 'lucy']
  return usernameMap.indexOf(str.trim()) >= 0
}

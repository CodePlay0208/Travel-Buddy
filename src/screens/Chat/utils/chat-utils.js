export const isSameSenderMargin = (messages, m, i, userId) => {
  if (i < messages.length - 1 && messages[i + 1].sender.userId === m.sender.userId && messages[i].sender.userId !== userId) return 33
  else if (
    (i < messages.length - 1 && messages[i + 1].sender.userId !== m.sender.userId && messages[i].sender.userId !== userId) ||
    (i === messages.length - 1 && messages[i].sender.userId !== userId)
  )
    return 0
  else return 'auto'
}

export const isSameSender = (messages, m, i, userId) => {
  return (
    i < messages.length - 1 &&
    (messages[i + 1].sender.userId !== m.sender.userId || messages[i + 1].sender.userId === undefined) &&
    messages[i].sender.userId !== userId
  )
}

export const isLastMessage = (messages, i, userId) => {
  return i === messages.length - 1 && messages[messages.length - 1].sender.userId !== userId && messages[messages.length - 1].sender.userId
}

export const isSameUser = (messages, m, i) => {
  return i > 0 && messages[i - 1].sender.userId === m.sender.userId
}

export const getSenderName = (loggedUser, users) => {
  return users[0]?.userId === loggedUser?.userId ? users[1]?.username : users[0]?.username
}

export const getSenderFull = (loggedUser, users) => {
  return users[0].userId === loggedUser.userId ? users[1] : users[0]
}

export const convertDateFormat = (dateStr) => {
  const [day, month, year] = dateStr.split('-')
  return `${year}-${month}-${day}`
}

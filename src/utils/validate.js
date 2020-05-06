const isEmail = (email) => {
  const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (email.match(regEx)) return true
  else return false
}

const isEmpty = (string) => {
  if (string.trim() === "") return true
  else return false
}

export const validateAuth = (email, user) => {
  let errors = {}
  if (isEmpty(user)) {
    errors.user = "Must not be empty"
  }
  if (isEmpty(email)) {
    errors.email = "Must not be empty"
  } else if (!isEmail(email)) {
    errors.email = "Must be a valid email"
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  }
}

/**
 * Function creates simple message based on the parameter
 */
const createMessage = (param: string): string => {
  const message = `This is my parameter: ${param}`
  return message
}

export {
  createMessage
}

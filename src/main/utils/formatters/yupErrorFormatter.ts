

export const formattedErrorsYup = (errors: any[]) => errors.map(error => ({
  field: error.path,
  message: error.errors[0],
}))
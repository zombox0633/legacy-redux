export const CheckErrorMessage = (error:unknown) => {
  return error instanceof Error ? error.message : "Unknown error"
}
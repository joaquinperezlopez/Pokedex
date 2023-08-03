export const convertNumberToNChars = (
  value: number | string,
  nChars: number
): string => {
  // if we receive a number like 50, and nChars = 3, we need to return "050"
  return `${value}`.padStart(nChars, '0');
};

export const sanitizeFlavorDescription = (
  description: string | undefined
): string => {
  // Remove any HTML tags using a regular expression
  const withoutTags = description?.replace(/(<([^>]+)>)/gi, '') ?? '';

  // Remove line breaks and extra whitespace
  const trimmedText = withoutTags?.replace(/\s+/g, ' ').trim() ?? '';

  // You can add more custom sanitization here if needed.
  return trimmedText;
};

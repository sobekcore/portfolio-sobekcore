export function kebabCaseToCamelCase(input: string): string {
  return input.replace(/-./g, (match): string => match[1].toUpperCase());
}

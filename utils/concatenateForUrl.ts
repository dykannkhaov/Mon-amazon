function concatenateForUrl(str: string): string {
  return str.split(' ').join('-').toLowerCase()
}

export { concatenateForUrl }

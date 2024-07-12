type ClickToCopy = {
  contentToCopy: string
}

export const ClickToCopy = async ({ contentToCopy }: ClickToCopy) => {
  await navigator.clipboard.writeText(contentToCopy)
}

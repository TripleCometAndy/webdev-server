interface Input {
  key1: string,
  key2?: string
}

interface Output {
  key3: string
}

export const handler = (e: Input): Output => {
  console.log("Hello world!")
  const out = {
    key3: "Yeah",
    key4: true
  }

  return out
}
// config/minikitConfig.ts

const ROOT_URL: string =
  process.env.NEXT_PUBLIC_URL ||
  "https://notcubey.vercel.app";

export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjExMTIzMTksInR5cGUiOiJhdXRoIiwia2V5IjoiMHhjREU1NmU3ZmE4MjM1NTUyOTYwQzYyNUUzMTE1RGUxMjNFRDRFQjkyIn0",
    payload: "eyJkb21haW4iOiJub3RjdWJleS52ZXJjZWwuYXBwIn0",
    signature: "QUQfnzk879WADMCaByCJUVpe0TAP3kFjxY3MqAGQ681HiPoTAaqiBnqTTDJGSAt2FcFt3BwSwbVcBpR3mOmBRhw="
  },
  baseBuilder: {
    ownerAddress: "0x5be8F2CEA3fa9206e7D3276a7c1C35106809f594"
  },
miniapp: {
  version: "1",
  name: "math-quick",
  subtitle: "Fast Math Puzzle Game",
  description: "Test your math speed and reflexes!",
  screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
  iconUrl: `${ROOT_URL}/game-icon.png`,
  splashImageUrl: `${ROOT_URL}/game-hero.png`,
  splashBackgroundColor: "#000000",
  homeUrl: ROOT_URL,
  webhookUrl: `${ROOT_URL}/api/webhook`,
  primaryCategory: "games",
  tags: ["game", "math", "puzzle", "quick", "miniapp"],
  heroImageUrl: `${ROOT_URL}/game-hero.png`,
  tagline: "Improve your brain speed with fun math challenges!",
  ogTitle: "Math Quick Game",
  ogDescription: "Test your brain speed with fast math puzzles.",
  ogImageUrl: `${ROOT_URL}/game-hero.png`
}  
} as const;
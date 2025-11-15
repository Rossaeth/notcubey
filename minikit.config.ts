// config/miniapp.ts

const ROOT_URL: string =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

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
    name: "fid ai",
    subtitle: "Your AI Ad Companion",
    description: "Ads",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`,
    tagline: "AI-powered marketing assistant",
    ogTitle: "Cubey - Your AI Ad Companion",
    ogDescription: "Create smarter ads with Cubey MiniApp",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`
  }
} as const; 

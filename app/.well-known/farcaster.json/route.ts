export async function GET() {
  return Response.json({
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
      name: "fidai",
      subtitle: "Your AI Ad Companion",
      description: "Ads",
      screenshotUrls: ["https://notcubey.vercel.app/screenshot-portrait.png"],
      iconUrl: "https://notcubey.vercel.app/blue-icon.png",
      splashImageUrl: "https://notcubey.vercel.app/blue-hero.png",
      splashBackgroundColor: "#000000",
      homeUrl: "https://notcubey.vercel.app",
      webhookUrl: "https://notcubey.vercel.app/api/webhook",
      primaryCategory: "social",
      tags: ["marketing","ads","quickstart","waitlist"],
      heroImageUrl: "https://notcubey.vercel.app/blue-hero.png",
      tagline: "AI-powered marketing assistant",
      ogTitle: "fid ai - Your AI Ad Companion",
      ogDescription: "Create smarter ads with fid ai MiniApp",
      ogImageUrl: "https://notcubey.vercel.app/blue-hero.png"
    }
  });
}

import { builder } from "@builder.io/sdk";

export async function getContent() {
  return await builder
    .get("homepage", {
      userAttributes: { urlPath: "/" },
      apiKey: "3021e7c2623e453297ba70ab561879f3",
    })
    .toPromise();
}

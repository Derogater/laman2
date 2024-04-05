import  ImageUrlBuilder  from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "eiai7o20",
    dataset: "production",
    apiVersion: "2024-04-04",
    useCdn: true,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}
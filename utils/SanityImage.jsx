import { clientConfig } from "@/sanity/client-config";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(clientConfig);

export function urlFor(source) {
    return builder.image(source);
}
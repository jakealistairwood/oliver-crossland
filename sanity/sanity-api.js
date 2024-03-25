import { createClient, groq } from "next-sanity"
import { clientConfig } from "./client-config";

export const fetchHomepageData = async () => {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == "/"]{
            _id,
            "slug": slug.current,
            sections[]{
                ...,
                components[]{
                  ...,
                  selectedWorks{
                    ...,
                    featured_projects[]->
                  }
                }
            }
        }[0]`
    );
}

export const fetchPortolio = async () => {
    return createClient(clientConfig).fetch(
        groq`*[_type == "portfolio"] {
            ...
          }`
    )
}
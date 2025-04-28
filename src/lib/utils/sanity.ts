import {createClient, type ClientConfig} from "@sanity/client";

const config: ClientConfig = {
    projectId: 'oenpxw9v',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2025-04-28'
}

const sanityClient = createClient(config);
export default sanityClient;


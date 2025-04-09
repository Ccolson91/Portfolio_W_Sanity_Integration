import {createClient, type ClientConfig} from "@sanity/client";

const config: ClientConfig = {
    projectId: 'ukhzvzp1',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2025-06-04'
}

const sanityClient = createClient(config);
export default sanityClient;

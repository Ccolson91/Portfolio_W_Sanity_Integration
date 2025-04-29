import {createClient, type ClientConfig} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";


const config: ClientConfig = {
    projectId: 'oenpxw9v',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2025-04-28'
}

const sanityClient = createClient(config);
export default sanityClient;

export function processProjectEntries(rawProject: SanityProject) {
    const builder = imageUrlBuilder(sanityClient);
    const projectImageUrl = builder.image(rawProject.image).url();

    const processedProject: ProcessedProject = {
        name: rawProject.name,
        company: rawProject.company,
        dateAccomplished: rawProject.dateAccomplished,
        stack: rawProject.stack,
        slug: rawProject.slug,
        projectImageUrl,
        content: rawProject.content.map(processProjectContent),
    };

    return processedProject;
}

function processProjectContent(content: RawTextContent | RawImageContent){
    if (content._type === 'block'){
        const ProcessedTextContent: ProcessedTextContent = {
            type: 'text',
            style: content.style,
            textToRender: content.children.map(elem => elem.text).join('\n')
        };
        return ProcessedTextContent;
    } else {
        const builder = imageUrlBuilder(sanityClient);
        const projectImageUrl = builder.image(content).url();

        const processedImage: ProcessedImageContent = {
            type: 'image',
            url: projectImageUrl
        };
        return processedImage;
    }
}


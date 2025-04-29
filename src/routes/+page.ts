// import type { DevExperience } from "$lib/types/sanity";
import sanityClient, { processProjectEntries } from "$lib/utils/sanity";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    const workExperience: SanityWorkExperience[] = await sanityClient.fetch('*[_type == "devExperience"] | order(startDate desc)');
    const rawProjects: SanityProject[] = await sanityClient.fetch("*[_type == 'project']");

    const projects = rawProjects.map(processProjectEntries);

    // console.log(rawProjects);

    return {
        workExperience, projects
    };
}
import { SENDGRID_API_KEY } from "$env/static/private";
import sgMail from "@sendgrid/mail";
import { json } from "@sveltejs/kit";

sgMail.setApiKey(SENDGRID_API_KEY);

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function POST({request}) {
    const {contactMail, contactName, infoAboutProject} = await request.json();

    if (!contactMail || !contactName || !infoAboutProject) {
        json({message: "Could not send email. Missing data."}, {status: 400});
    }

    const message = {
        to: 'christiancolson91@gmail.com',
        from: 'christiancolson91@gmail.com',
        subject: 'Contact Form on your portfolio',
        html: `Somebody used the contact form on your site. <br/>
            Name: ${contactName},
            Email: ${contactMail},
            Information about the project: ${infoAboutProject}`
    };

    try {
        await sgMail.send(message);
        return json({emailSentSuccessfully: true});
    } catch (err) {
        return json({err}, {status: 500});
    }
}

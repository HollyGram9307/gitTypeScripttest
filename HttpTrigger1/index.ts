import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    context.log('test for git deploy');
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello Git, " + name + ". This HTTP triggered function executed successfully."
        : "Hello Git. This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

};

export default httpTrigger;
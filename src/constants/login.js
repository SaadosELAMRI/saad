/**
 * @param {import("next").NextApiRequest} request 
 * @param {import("next").NextApiResponse} response 
 */
export default function login(request, response) {
    if (request.method === 'POST') {
        // Validation serveur des données
        if(true){
            console.log(request.body);
            response.status(200).end();
        }
        else {
            response.status(400).end();
        }
    }
    else {
        response.setHeader('Alloy', 'POST');
        response.status(405).end();
    }
}

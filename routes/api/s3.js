const router = require('aws-lambda-router');
 
// handler for an api gateway event
exports.handler = router.handler({
    proxyIntegration: {
        routes: [
            {
                path: '/upload',
                method: 'GET',
                action: (request, context) => {
                    return "You called me with: " + request.paths.id;
                }
            }
        ]
    }
}

module.exports = function (Attachement) {

    Attachement.upload = function (ctx, options, cb) {
        if (!options) options = {};
        ctx.req.params.container = 'common';

        console.log("CALLBACK");
        Attachement.app.models.Storage.upload(ctx.req, ctx.result, options, function (err, fileObj) {
            console.log("FILE HANDLED");
            cb(fileObj);
        });
    };

    Attachement.remoteMethod(
        'upload',
        {
            description: 'Uploads a file',
            accepts: [
                {arg: 'ctx', type: 'object', http: {source: 'context'}},
                {arg: 'options', type: 'object', http: {source: 'query'}}
            ],
            returns: {
                arg: 'fileObject', type: 'object', root: true
            },
            http: {verb: 'post'}
        }
    );

};
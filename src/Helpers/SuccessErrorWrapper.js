const SuccessErrorWrapper =
    (expressMiddleware, success_message, success_status_code) =>
        (req, res, next) => {
            Promise.resolve(expressMiddleware(req, res, next))
                .then((data) => {
                    return res.status(success_status_code).json({
                        message: success_message,
                        success: true,
                        data: data,
                    });
                })
                .catch((error) => {
                    return next(error);
                });
        };

module.exports = { SuccessErrorWrapper };
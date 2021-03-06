/*
commentRouter.route('/:dishId/comment')


    .get(cors.cors, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        Leaders.findById(req.params.leaderId)
            .then((leader) => {
                if (leader != null) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(leaders.feedbacks);
                }
                else {
                    err = new Error('Leader ' + req.params.leaderId + ' not found');
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(cors.cors, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        Leaders.findByIdAndUpdate(req.params.leaderId,
            { "$push": { "feedback": req.body } },
            { "new": true },
            function (err, managerparent) {
                if (err) throw err;
                res.statusCode = 200;
                res.send('Added feedback to successfully')
                console.log(managerparent);
            },
            // Send Success RESPONSE.
        );
    })
    .put(cors.cors, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /leaders/'
            + req.params.leaderId + '/feedbacks');
    })
    .delete(cors.cors, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        Leaders.findById(req.params.leaderId)
            .then((leader) => {
                if (leader != null) {
                    for (var i = (leader.feedbacks.length - 1); i >= 0; i--) {
                        leader.feedbacks.id(leader.feedbacks[i]._id).remove();
                    }
                    leader.save()
                        .then((leader) => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(leader);
                        }, (err) => next(err));
                }
                else {
                    err = new Error('Leader ' + req.params.leaderId + ' not found');
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    });

LeaderRouter.route('/:leaderId/feedback/:feedbackId')
    /* .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); }) */
    /* .get(cors.cors, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        Leaders.findById(req.params.leaderId)
            .then((leader) => {
                if (leader != null && leader.feedbacks.id(req.params.feedbackId) != null) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(leader.feedbacks.id(req.params.feedbackId));
                }
                else if (leader == null) {
                    err = new Error('Leader ' + req.params.leaderId + ' not found');
                    err.status = 404;
                    return next(err);
                }
                else {
                    err = new Error('feedback ' + req.params.feedbackId + ' not found');
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(cors.cors, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /leaders/' + req.params.leaderId
            + '/feedbacks/' + req.params.feedbackId);
    })
    .put(cors.cors, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {

        Leaders.findById(req.params.leaderId)
            .then((leaders) => {
                if (leaders != null && leaders.feedbacks.id(req.params.feedbackId) != null) {
                    if (req.body.rating) {
                        leaders.feedbacks.id(req.params.feedbackId).rating = req.body.rating;
                    }
                    if (req.body.feedback) {
                        leaders.feedbacks.id(req.params.feedbackId).feedback = req.body.feedback;
                    }
                    leader.save()
                        .then((leader) => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(leaders);
                        }, (err) => next(err));
                }
                else if (leaders == null) {
                    err = new Error('Leader ' + req.params.leaderId + ' not found');
                    err.status = 404;
                    return next(err);
                }
                else {
                    err = new Error('feedback ' + req.params.feedbackId + ' not found');
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete(cors.cors, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {

        Leaders.findById(req.params.leaderId)
            .then((leaders) => {
                if (leaders != null && leaders.feedbacks.id(req.params.feedbackId) != null) {
                    leaders.feedbacks.id(req.params.feedbackId).remove();
                    leaders.save()
                        .then((leaders) => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(leaders);
                        }, (err) => next(err));
                }
                else if (leaders == null) {
                    err = new Error('Leaders ' + req.params.leaderId + ' not found');
                    err.status = 404;
                    return next(err);
                }
                else {
                    err = new Error('feedback ' + req.params.feedbackId + ' not found');
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    });  */
module.exports = function(Acquisition) {
    Acquisition.disableRemoteMethod("upsert", true);
    Acquisition.disableRemoteMethod("updateAll", true);
    Acquisition.disableRemoteMethod("updateAttributes", false);

    Acquisition.disableRemoteMethod("findById", true);
    Acquisition.disableRemoteMethod("findOne", true);

    Acquisition.disableRemoteMethod("deleteById", true);

    Acquisition.disableRemoteMethod("confirm", true);
    Acquisition.disableRemoteMethod("count", true);
    Acquisition.disableRemoteMethod("exists", true);
    Acquisition.disableRemoteMethod("resetPassword", true);

    Acquisition.disableRemoteMethod('__count__accessTokens', false);
    Acquisition.disableRemoteMethod('__create__accessTokens', false);
    Acquisition.disableRemoteMethod('__delete__accessTokens', false);
    Acquisition.disableRemoteMethod('__destroyById__accessTokens', false);
    Acquisition.disableRemoteMethod('__findById__accessTokens', false);
    Acquisition.disableRemoteMethod('__get__accessTokens', false);
    Acquisition.disableRemoteMethod('__updateById__accessTokens', false);
};
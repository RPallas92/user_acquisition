module.exports = function(Config) {
    Config.disableRemoteMethod("upsert", true);
    Config.disableRemoteMethod("updateAll", true);
    Config.disableRemoteMethod("updateAttributes", false);


    Config.disableRemoteMethod("deleteById", true);

    Config.disableRemoteMethod("confirm", true);
    Config.disableRemoteMethod("count", true);
    Config.disableRemoteMethod("exists", true);
    Config.disableRemoteMethod("resetPassword", true);

    Config.disableRemoteMethod('__count__accessTokens', false);
    Config.disableRemoteMethod('__create__accessTokens', false);
    Config.disableRemoteMethod('__delete__accessTokens', false);
    Config.disableRemoteMethod('__destroyById__accessTokens', false);
    Config.disableRemoteMethod('__findById__accessTokens', false);
    Config.disableRemoteMethod('__get__accessTokens', false);
    Config.disableRemoteMethod('__updateById__accessTokens', false);
};
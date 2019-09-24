module.exports = function (sequelize, DataTypes) {

    var User = sequelize.define("User", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_email: DataTypes.STRING,
        user_password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_tagline: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_summary: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        dateJoined: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        googleProviderId: DataTypes.STRING,
        googleProviderToken: DataTypes.STRING
    });

    User.upsertGoogleUser = function (accessToken, refreshToken, profile, cb) {
        return this.findOne({
            'googleProviderId': profile.id
        }).then((user) => {
            // no user was found, lets create a new one
            if (!user) {
                var newUser = new this({
                    user_name: profile.displayName,
                    user_email: profile.emails[0].value,
                    googleProviderId: profile.id,
                    googleProviderToken: accessToken
                });

                newUser.save()
                    .then(function (savedUser) {
                        return cb(savedUser);
                    }).catch(function (err) {
                        return console.log(err);
                    });
            }
        }).catch(function (err) {
            return cb(err);
        })
    };

    User.associate = function (models) {
        User.hasMany(models.Song, {
            onDelete: "cascade"
        });
    };

    return User;
};

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },    
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        artistname: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: true
    });

    User.associate = function (models) {
        User.hasMany(models.Song, {
            onDelete: "cascade"
        });
    };

    return User;
};

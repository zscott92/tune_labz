module.exports = function (sequelize, DataTypes) {
    var Song = sequelize.define("Song", {
        song_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        song_desc: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        song_pic_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        song_genres: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Song.associate = function (models) {
        Song.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Song;
};

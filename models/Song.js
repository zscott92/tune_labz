module.exports = function (sequelize, DataTypes) {
    var Song = sequelize.define("Song", {
        song_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        song_owner: {
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
        },
        song_analysis: {
            type: DataTypes.STRING,
            allowNull: true
        },
        collaborators: {
            type: DataTypes.STRING,
            get: function () {
                return JSON.parse(this.getDataValue(Song.associate.models.User));
            },
            set: function (artists) {
                return this.setDataValue('collaborators', JSON.stringify(artists));
            }
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

module.exports = function (sequelize, DataTypes) {
    try {
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
            },
            song_id: {
                type: DataTypes.INTEGER
            }
        }); 

        //TODO need to make sure how this references songs to songs and create post request
        Song.associate = function(models) {
            models.Song.hasMany(models.Song, {
              onDelete: 'CASCADE',
              foreignKey: 'song_id',
              as: 'children'
            });
          };

        Song.associate = function (models) {
            Song.belongsTo(models.User, {
                foreignKey: {
                    allowNull: false
                }
            });
        };
        return Song;
    }

    catch (er) {
        console.log("sorry....we don't have any data inserted yet");
    }
}

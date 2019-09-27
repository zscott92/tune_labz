module.exports = function (sequelize, DataTypes) {

    var Song = sequelize.define("Song", {
        key: {
            type: DataTypes.STRING,
            allowNull: false
        },
        song_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        song_desc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        song_pic_url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        song_genres: {
            type: DataTypes.STRING,
            allowNull: true
        },
        song_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        song_par_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
        // collaborators: {
        //     type: DataTypes.STRING,
        //     get: function () {
        //         return JSON.parse(this.getDataValue(Song.associate.models.User));
        //     },
        //     set: function (artists) {
        //         return this.setDataValue('collaborators', JSON.stringify(artists));
        //     }
        // },
    });

    //TODO need to make sure how this references songs to songs and create post request

    // Song.associate = function (models) {
    //     Song.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    // Song.associate = function(db) {
    //     db.Song.hasMany(db.Song, {
    //         onDelete: 'CASCADE',
    //         foreignKey: 'parent',
    //         as: 'children',
    //     });
    // };
    return Song;
}

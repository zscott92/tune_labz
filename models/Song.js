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
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }

    });

    Song.associate = function(db) {
        db.Song.hasMany(db.Song, {
            onDelete: 'CASCADE',
            foreignKey: 'song_par_id',
            as: 'nodes',
        });
    };
    return Song;
}
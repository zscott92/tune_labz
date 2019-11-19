odule.exports = function (sequelize, DataTypes) {

    var track = sequelize.define("track", {
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
        s3_song_url: {
            type: DataTypes.STRING,
            allowNull: false
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

    track.associate = function(db) {
        db.track.hasMany(db.track, {
            onDelete: 'CASCADE',
            foreignKey: 'song_par_id',
            as: 'nodes',
        });
    };
    return track;

}
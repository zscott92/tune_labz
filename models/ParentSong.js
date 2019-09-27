module.exports = function (sequelize, DataTypes) {

    var ParentSong = sequelize.define("ParentSong", {
        parent_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        song_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
}
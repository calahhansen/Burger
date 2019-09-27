module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            len: [1]
        }
    });

    // Burger.associate = function (models) {
    //     // We're saying that a Burger should belong to a Person
    //     // A Post can't be created without an Author due to the foreign key constraint
    //     Post.belongsTo(models.Author, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Burger;
};
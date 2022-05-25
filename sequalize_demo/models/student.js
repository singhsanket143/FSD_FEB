'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /*
      Student -> s_id, name, address
      Course -> c_id, name
      Student_Course -> s_id, c_id
    */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Course, {
        through: 'Student_Courses',
        foreignKey: 'studentId',
        otherKey: 'courseId'
      });

      this.belongsTo(models.City, {
        foreignKey: 'cityId'
      });
    }
  }
  Student.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};
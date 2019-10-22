module.exports = (sequelize, Datatype) => {
  const user = sequelize.define("user", {
    name: Datatype.STRING,
    email: Datatype.STRING,
    avatar: Datatype.STRING,
    password_hash: Datatype.STRING,
    provider: Datatype.BOOLEAN
  });

  return user;
};

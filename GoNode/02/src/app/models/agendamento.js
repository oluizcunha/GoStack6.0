module.exports = (sequelize, Datatypes) => {
  const agendamento = sequelize.define("agendamento", {
    date: Datatypes.DATE
  });

  agendamento.associate = models => {
    agendamento.belongsTo(models.user, { foreignKey: "user_id" });
    agendamento.belongsTo(models.user, { foreignKey: "provider_id" });
  };

  return agendamento;
};

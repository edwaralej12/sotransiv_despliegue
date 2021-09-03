const Sequelize = require("sequelize");
var sequelize = require("./database");
var Route = require("./Route");

var nameTable = "tbl_gastos_viaje";

var RouteExpenses = sequelize.define(nameTable, {
  
    id_gasto:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    fecha_realizado: Sequelize.DATE,
    valor_gasto: Sequelize.DOUBLE,
    descripcion: Sequelize.STRING,
    codigo_factura: Sequelize.STRING,
    nombre_empresa: Sequelize.STRING,
    codigo_ruta: {
      type: Sequelize.INTEGER,
      reference: {
        model: Route,
        key: "id_ruta",
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = RouteExpenses;

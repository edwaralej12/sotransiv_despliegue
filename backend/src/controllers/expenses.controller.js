const controller = {};
const connection = require('../../dbConnection/connection');
const conn = connection();
const RouteExpenses = require('../model/RouteExpenses');

controller.getRouteExpenses = (req, res, next) => {
  conn.query('  SELECT G.id_gasto, G.fecha_realizado, G.valor_gasto, G.descripcion, G.codigo_factura, G.nombre_empresa , R.codigo_ruta  '+
  ' FROM sotransiv.tbl_gastos_viaje G  '+ 
  ' INNER JOIN tbl_rutas R	ON G.id_ruta = R.id_ruta  ', (err, rows) => {
    if (err) next(new Error(err))
    else res.json({ success: true, data: rows })
  })
}

controller.getEditExpenses = async (req,res,next) => {
  const { id_ruta } = req.params;

  conn.query(' SELECT G.id_gasto, G.fecha_realizado, G.valor_gasto, G.descripcion, G.codigo_factura, G.nombre_empresa , R.codigo_ruta  '+
  ' FROM sotransiv.tbl_gastos_viaje G  '+ 
  ' INNER JOIN tbl_rutas R	ON G.id_ruta = R.id_ruta  where G.id_ruta ='+ req.params.id_ruta,(err, rows) =>{
    if (err) next(new Error(err));
    else res.json({ success: true, data: rows });
  } )
  
}


module.exports = controller;
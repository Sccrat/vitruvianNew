import pkg from 'pg';
const { Client } = pkg;


const client = new Client({
  connectionString: "postgres://rzpekcvppdstgl:42388371ef77390bbb835fc39de8c562b24eb1a62525e4bd82ce0b7dbc1486f9@ec2-44-194-92-192.compute-1.amazonaws.com:5432/dd1f7porsuu4tr",
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

export default {
    async insertar(nombre, producto,codigo) {
        let resultados = await client.query(`insert into caracteristicas
        (nombre, producto,codigo)
        values
        ($1, $2, $3)`, [nombre, producto,codigo]);
        return resultados;
    },
    async obtener() {
        const resultados = await client.query("select * from dd1f7porsuu4tr.vitruvian.prueba");
        return resultados.rows;
    },
    async obtenerPorId(id) {
        const resultados = await client.query(`select * from dd1f7porsuu4tr.vitruvian.prueba where id = $1`, [id]);
        return resultados.rows[0];
    },
    async actualizar(id,nombre, producto,codigo) {
        const resultados = client.query(`update dd1f7porsuu4tr.vitruvian.caracteristicas
        set nombre = $1,
        producto = $2,
        codigo = $3
        where id = $4`, [nombre, producto,codigo, id]);
        return resultados;
    },
    async eliminar(id) {
        const resultados = client.query(`delete from productos
        where id = $1`, [id]);
        return resultados;
    },
}
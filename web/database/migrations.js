import {  DataTypes  } from "sequelize";
import { sequelize } from "./consultas.js";

 export const Caracteristicas = sequelize.define('caracteristicas',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING,
    },producto:{
        type:DataTypes.STRING,
    },codigo:{
        type:DataTypes.STRING,
    }},{
        timestamps:false
    });
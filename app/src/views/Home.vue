<template>
  <div
    class="home">
    <v-card
      elevation="10"
      shaped>
      <v-card-title>
        <h1>Análisis de sistemas II</h1>
      </v-card-title>
      <v-card-subtitle>
        <h2>Proyecto final</h2>
        <h3>Fase No.2</h3>
      </v-card-subtitle>
      <v-card-text>
        <h3>Arquitectura</h3>
        <p>Los servidores deben de estar expuestos como arquitectura en servicio(AWS, Azure, Google , etc) .</p>
        <p>De los integrantes del equipo deben de exponer los siguientes servidores:</p>
        <ol>
          <li>
            Servidor para Base de Datos(excel,db, otros).
          </li>
          <li>
            Servidor de Aplicaciones(Exponder BI).
          </li>
        </ol>

        <p>
          Instrucciones
        </p>
        <p>
          Total de servidorres 2 , los servidores deben de estar creado en diferentes cuentas , el servidor debe de tener los datos cargados, mientras que el servidor de aplicaciones debe de contener el Dashboard donde se encontraran las metricas
        </p>
        <h3>
          Analisis
        </h3>
        <p>
          Consiste es utlizar a criterio de equipo de trabajo el entorno de trabajo para crear las metricas , es decir deben de crear los dashboard para:
        </p>
        <ol>
          <li>
            Area Gerencial.
          </li>
          <li>
            Area Tecnica (Mandos Medios).
          </li>
        </ol>
        <p>
          Cantidad de areas 2 (los Dashboard a crear queda a discreción del equipo
        </p>
        <h3>
          Diseño
        </h3>
        <p>
          Se solicita crear el diseño para los siguientes controles:
        </p>
        <ol>
          <li>
            Grafica dinamica de empleados con asistencia mensual.
          </li>
          <li>
            Grafica dinamica de empleados con mayor asistencia.
          </li>
          <li>
            Grafica dinamica de empleados con mayor entrada antes de las 09:00 AM.
          </li>
          <li>
            Grafica dinamica de empleados con mayor salida despues de las 06:00 PM.
          </li>
          <li>
            Grafica dinamica que muestra los dias de la semana con : mayor ingreso.
          </li>
          <li>
            Grafica dinamica comparativa entre los diferentes meses, con mayor asistencia(ej. mes de enero 2018 vrs. mes de enero 2019, ej. 2 mes de febrero 2018 vrs mes de julio 2018)
          </li>
          <li>
            Grafica estatica con el total de empleados por mes, dinamica la seleccion del año(2018,2019)
          </li>
          <li>
            Grafica dinamica con los 5 empleados con mayor asistencia de forma mensual(ej los 5 empleados que mas asistieron en enero, febrero, etc)
          </li>
          <li>
            Tome una muestra de 100 datos de los cuales combine entre sexo masculino y femenino  y cree una grafica dinamica mostrando el total de empleados por sexo.
          </li>
          <li>
            De las graficas solicitadas sorprenda la Gerente con una grafica dinamica que no encuentre en el listado actual.
          </li>
        </ol>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/MentalHealthBI/main/Student%20Mental%20health.csv", function(err, data) {
      
      // Prepara los datos para el gráfico
      var datos = [
        {
          x: data.map(function(d) { return d.Age; }),
          type: 'histogram',
          autobinx: false,
          xbins: {
            start: 16,
            end: 25,
            size: 1
          }
        }
      ];
      
      // Configura el diseño del gráfico
      var configuracion = {
        title: 'Distribución de la edad de los estudiantes',
        xaxis: {
          title: 'Edad'
        },
        yaxis: {
          title: 'Frecuencia'
        }
      };
      
      // Dibuja el gráfico
      Plotly.newPlot('grafico1', datos, configuracion);
      
    });

    // Carga los datos del archivo CSV
    Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/MentalHealthBI/main/Student%20Mental%20health.csv", function(err, data) {
      
      // Prepara los datos para el gráfico
      var datos = [
        {
          x: data.map(function(d) { return d.panic_attack; }),
          type: 'histogram',
          autobinx: false,
          xbins: {
            start: 0,
            end: 10,
            size: 0.5
          },
          marker: {
            color: 'blue'
          }
        }
      ];
      
      // Configura el diseño del gráfico
      var configuracion = {
        title: 'Gráfico de densidad de ataques de pánico',
        xaxis: {
          title: 'Puntuación de ataques de pánico'
        },
        yaxis: {
          title: 'Densidad'
        }
      };
      
      // Dibuja el gráfico
      Plotly.newPlot('grafico2', datos, configuracion);
      
    });

    // Carga los datos del archivo CSV
    Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/MentalHealthBI/main/Student%20Mental%20health.csv", function(err, data) {
      
      // Prepara los datos para el gráfico
      var datos = [
        {
          x: data.map(function(d) { return d.anxiety; }),
          type: 'histogram',
          autobinx: false,
          xbins: {
            start: 0,
            end: 10,
            size: 0.5
          },
          marker: {
            color: 'skyblue'
          }
        }
      ];
      
      // Configura el diseño del gráfico
      var configuracion = {
        title: 'Gráfico de densidad de casos de ansiedad',
        xaxis: {
          title: 'Puntuación de ansiedad'
        },
        yaxis: {
          title: 'Densidad'
        }
      };
      
      // Dibuja el gráfico
      Plotly.newPlot('grafico3', datos, configuracion);
      
    });

    // Carga los datos del archivo CSV
    Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/MentalHealthBI/main/Student%20Mental%20health.csv", function(err, data) {
      
      // Prepara los datos para el gráfico
      var datos = [
        {
          x: data.map(function(d) { return d.depression; }),
          type: 'histogram',
          autobinx: false,
          xbins: {
            start: 0,
            end: 10,
            size: 0.5
          },
          marker: {
            color: 'green'
          }
        }
      ];
      
      // Configura el diseño del gráfico
      var configuracion = {
        title: 'Gráfico de densidad de casos de depresión',
        xaxis: {
          title: 'Puntuación de depresión'
        },
        yaxis: {
          title: 'Densidad'
        }
      };
      
      // Dibuja el gráfico
      Plotly.newPlot('grafico4', datos, configuracion);
      
    });

    
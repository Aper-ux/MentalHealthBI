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
            color: 'salmon'
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
    // Carga los datos del archivo CSV  
    Plotly.d3.csv("https://raw.githubusercontent.com/Aper-ux/MentalHealthBI/main/Student%20Mental%20health.csv", function(err, data) {

        // Convierte los datos de texto a numéricos
        data.forEach(function(d) {
            if (d.panic_attack == "No") {
                d.panic_attack = 0;
            }
            else {
                d.panic_attack = 1;
            }
            if (d.anxiety == "No") {
                d.anxiety = 0;
            }
            else {
                d.anxiety = 1;
            }
            if (d.depression == "No") {
                d.depression = 0;
            }
            else {
                d.depression = 1;
            }
            if (d.marital_status == "No"){
                d.marital_status = 0;
            }
            else {
                d.marital_status = 1;
            }
            if (d.gender == "Male"){
                d.gender == 0;
            }else{
                d.gender == 1;
            }
        });

        console.log(data);

        // Prepara los datos para el gráfico
        var datos = [
            {
                y: data.map(function(d) { return d.panic_attack; }),
                x: data.map(function(d) { return d.gender; }),

                type: 'bar',
                name: 'Ataques de pánico',

            },
            {
                y: data.map(function(d) { return d.anxiety; }),
                x: data.map(function(d) { return d.gender; }),

                type: 'bar',
                name: 'Ansiedad',

            },
            {
                y: data.map(function(d) { return d.depression; }),
                x: data.map(function(d) { return d.gender; }),

                type: 'bar',
                name: 'Depresión',

            }
        ];

        // Configura el diseño del gráfico
        var configuracion = {
            barmode: 'group',
            title: 'Gráfico de dispersión de puntuaciones de ansiedad, depresión y ataques de pánico',
            xaxis: {
                title: 'Puntuación de ataques de pánico'
            },
            yaxis: {
                title: 'Puntuación de ansiedad'
            }
        };

        // Dibuja el gráfico
        Plotly.newPlot('grafico6', datos, configuracion);

    });
    
var maxPuntos = 30;

class Equipo {
  nombre;
  puntos;
  numero;

  constructor(nombreEquipo, numero) {
    this.nombre = nombreEquipo;
    this.puntos = 0;
    this.numero = numero;
  }

  sumarPunto() {
    if (this.puntos < maxPuntos) {
      this.puntos++;
    }
    this.dibujarPuntos();
  }

  restarPunto() {
    if (this.puntos > 0) {
      this.puntos--;
    }
    this.dibujarPuntos();
  }

  dibujarPuntos() {
    // reset
    $(`#equipo${this.numero} .puntos .punto`).removeClass('p1');
    $(`#equipo${this.numero} .puntos .punto`).removeClass('p2');
    $(`#equipo${this.numero} .puntos .punto`).removeClass('p3');
    $(`#equipo${this.numero} .puntos .punto`).removeClass('p4');
    $(`#equipo${this.numero} .puntos .punto`).removeClass('p5');

    // la cantidad de cuadrados que tengo que marcar con 5 puntos
    const full = Math.floor(eval(`equipo${this.numero}`).puntos / 5);

    // marco esos cuadrados con 5 puntos
    for (let i = 1; i <= full; i++) {
      $(`#equipo${this.numero} .puntos .punto:nth-child(${i})`).addClass('p5');
    }

    // el cuadrado siguiente a los que marque completos
    const current = full + 1;
    // cantidad de palitos que tengo que ponerle a éste cuadrado
    const dif = eval(`equipo${this.numero}`).puntos % 5;

    // marco éste cuadrado con el puntaje adecuado
    if (dif > 0) {
      $(`#equipo${this.numero} .puntos .punto:nth-child(${current})`).addClass(
        `p${dif}`
      );
    }

    this.marcarGanador();
  }

  marcarGanador() {
    if (this.puntos === maxPuntos) {
      $(`#equipo${this.numero} .win`).show();
      $(`#equipo${this.numero} .lose`).hide();
      if (this.numero === 1) {
        $(`#equipo2 .lose`).show();
        $(`#equipo2 .win`).hide();
      } else {
        $(`#equipo1 .lose`).show();
        $(`#equipo1 .win`).hide();
      }
      $('.winLose').show();
      $('.actions').hide();
    }
  }

  resetPuntos() {
    this.puntos = 0;
    this.dibujarPuntos();
  }
}

$(document).ready(function () {});

function validJugar() {
  if (
    $('#nombreEquipo1').val() &&
    $('#nombreEquipo2').val() &&
    $('#nombreEquipo1').val() !== $('#nombreEquipo2').val()
  ) {
    $('#btnJugar').prop('disabled', false);
  } else {
    $('#btnJugar').prop('disabled', true);
  }
}

function onClickJugar() {
  equipo1 = new Equipo($('#nombreEquipo1').val(), 1);
  equipo2 = new Equipo($('#nombreEquipo2').val(), 2);

  $('#menuPrincipal').hide();
  $('#anotador').show();

  $('#equipo1').find('.nombre').text(equipo1.nombre);
  $('#equipo2').find('.nombre').text(equipo2.nombre);
}

function newGame() {
  delete equipo1;
  delete equipo2;

  $('#menuPrincipal').show();
  $('#anotador').hide();
}

function reset() {
  equipo1.resetPuntos();
  equipo2.resetPuntos();
  $('.winLose').hide();
  $('.actions').show();
}

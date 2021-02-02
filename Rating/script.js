var rating = 3;

$(document).ready(function () {
  markRate();
  $('.star').on('click', rate);
  $('.star').on('mouseover', over);
  $('.star').on('mouseout', out);
});

function over(event) {
  rateOver = parseInt($(event.currentTarget).attr('rate'));
  for (let i = 0; i <= 5; i++) {
    $('#star' + i).removeClass('active');
    if (i <= rateOver) {
      $('#star' + i).addClass('hover');
    } else {
      $('#star' + i).removeClass('hover');
    }
  }
}

function out() {
  for (let i = 0; i <= 5; i++) {
    $('#star' + i).removeClass('hover');
  }
  markRate();
}

function rate(event) {
  rating = parseInt($(event.currentTarget).attr('rate'));
  markRate();
}

function markRate() {
  for (let i = 0; i <= 5; i++) {
    if (i <= rating) {
      $('#star' + i).addClass('active');
    } else {
      $('#star' + i).removeClass('active');
    }
  }
}

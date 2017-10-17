<script>
    $(document).ready(function() {
     $('#deal-button').click (function () {
         var cards = "/static/images/2_of_clubs.png"
         $('#player-hand').append('<img src=/static/images/2_of_clubs.png alt="2"/>')
         $('#dealer-hand').append('<img src=/static/images/2_of_clubs.png alt="2"/>')

    });
    });
    $(document).ready(function() {
     $('#hit-button').click (function () {
         var cards = "/static/images/2_of_clubs.png"
         $('#player-hand').append('<img src=/static/images/2_of_clubs.png alt="2"/>')
         $('#dealer-hand').append('<img src=/static/images/2_of_clubs.png alt="2"/>')
    });
    });
</script>

var deck = [
  { point: 13: suit: 'hearts' },
  { point: 1, suit: 'diamonds' },
  ...
];

var kingOfHearts =  { point: 13, suit: 'hearts'   };
var aceOfDiamonds = { point: 1,  suit: 'diamonds' };

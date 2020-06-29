// event pada saat link di klik
$('.page-scroll').on('click', function (e) {

  // ambil isi href
  var tujuan = $(this).attr('href');
  console.log(tujuan);
  // tangkap elemen yang bersangkutan
  var elemenTujuan = $(tujuan);
  console.log(elemenTujuan);

  // pindahkan scroll
  $('body, html').animate({
    scrollTop: elemenTujuan.offset().top - 50
  }, 1250, 'easeInOutExpo');

  e.preventDefault();

});
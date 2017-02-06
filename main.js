function main(){
  $('.main h1').hide();
  $('.main h1').fadeIn(2000);

  $('.aboutme').hide();
  $('.past').hide();
  $('.present').hide();
  $('.future').hide();

  $('#aboutme').on('click', function(){
    $('.past').hide();
    $('.present').hide();
    $('.future').hide(); 
    $('.aboutme').fadeToggle(400);});
  
  $('#past').on('click', function(){
    $('.aboutme').hide();
    $('.present').hide();
    $('.future').hide();    
    $('.past').fadeToggle(400);});

  $('#present').on('click', function(){
    $('.past').hide();
    $('.aboutme').hide();
    $('.future').hide();    
    $('.present').fadeToggle(400);});


  $('#future').on('click', function(){
    $('.past').hide();
    $('.present').hide();
    $('.aboutme').hide();   
    $('.future').fadeToggle(400);});

}

$(document).ready(main);
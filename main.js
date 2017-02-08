function main(){
  $('.main h1').hide();
  $('.main h1').fadeIn(4000);

  $('.aboutme').hide();
  $('.past').hide();
  $('.present').hide();
  $('.future').hide();

  $('#aboutme').on('click', function(){
    $('.past').hide();
    $('.present').hide();
    $('.future').hide(); 
    $('.firstpage').hide(); 
    $('.portfolio').hide(); 
    $('.aboutme').fadeIn(400);});
  
  $('#past').on('click', function(){
    $('.aboutme').hide();
    $('.present').hide();
    $('.future').hide();
    $('.firstpage').hide(); 
    $('.portfolio').hide();     
    $('.past').fadeIn(400);});

  $('#present').on('click', function(){
    $('.past').hide();
    $('.aboutme').hide();
    $('.future').hide(); 
    $('.firstpage').hide(); 
    $('.portfolio').hide();    
    $('.present').fadeIn(400);});


  $('#future').on('click', function(){
    $('.past').hide();
    $('.present').hide();
    $('.aboutme').hide(); 
    $('.firstpage').hide();
    $('.portfolio').hide();    
    $('.future').fadeIn(400);});

  $('#portfolio').on('click', function(){
    $('.past').hide();
    $('.present').hide();
    $('.aboutme').hide(); 
    $('.firstpage').hide();
    $('.future').hide();    
    $('.portfolio').fadeIn(400);});

  $('#naboutme').on('click', function(){
    $('.past').hide();
    $('.present').hide();
    $('.future').hide(); 
    $('.firstpage').hide(); 
    $('.portfolio').hide(); 
    $('.aboutme').fadeIn(400);});
  
  $('#npast').on('click', function(){
    $('.aboutme').hide();
    $('.present').hide();
    $('.future').hide();
    $('.firstpage').hide(); 
    $('.portfolio').hide();     
    $('.past').fadeIn(400);});

  $('#npresent').on('click', function(){
    $('.past').hide();
    $('.aboutme').hide();
    $('.future').hide(); 
    $('.firstpage').hide(); 
    $('.portfolio').hide();    
    $('.present').fadeIn(400);});


  $('#nfuture').on('click', function(){
    $('.past').hide();
    $('.present').hide();
    $('.aboutme').hide(); 
    $('.firstpage').hide();
    $('.portfolio').hide();    
    $('.future').fadeIn(400);});

  $('#nportfolio').on('click', function(){
    $('.past').hide();
    $('.present').hide();
    $('.aboutme').hide(); 
    $('.firstpage').hide();
    $('.future').hide();    
    $('.portfolio').fadeIn(400);});

}

$(document).ready(main);
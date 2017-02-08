function main(){
  $('.jumbotron h1').hide();
  $('.aboutme').hide();
  $('.cv').hide();
  $('.research').hide();
  $('.future').hide();
  $('.portfolio').hide();
  $('.jumbotron h1').fadeIn(4000);


  $('#aboutme').on('click', function(){
    $('.cv').hide();
    $('.research').hide();
    $('.future').hide(); 
    $('.jumbotron').hide(); 
    $('.portfolio').hide(); 
    $('.aboutme').fadeIn(400);});

  
  $('#naboutme').on('click', function(){
    $('.cv').hide();
    $('.research').hide();
    $('.future').hide(); 
    $('.jumbotron').hide(); 
    $('.portfolio').hide(); 
    $('.aboutme').fadeIn(400);});
  
  $('#ncv').on('click', function(){
    $('.aboutme').hide();
    $('.research').hide();
    $('.future').hide();
    $('.jumbotron').hide(); 
    $('.portfolio').hide();     
    $('.cv').fadeIn(400);});

  $('#nresearch').on('click', function(){
    $('.cv').hide();
    $('.aboutme').hide();
    $('.future').hide(); 
    $('.jumbotron').hide();  
    $('.portfolio').hide();    
    $('.research').fadeIn(400);});


  $('#nfuture').on('click', function(){
    $('.cv').hide();
    $('.research').hide();
    $('.aboutme').hide(); 
    $('.jumbotron').hide(); 
    $('.portfolio').hide();    
    $('.future').fadeIn(400);});

  $('#nportfolio').on('click', function(){
    $('.cv').hide();
    $('.research').hide();
    $('.aboutme').hide(); 
    $('.jumbotron').hide(); 
    $('.future').hide();    
    $('.portfolio').fadeIn(400);});
}

$(document).ready(main);
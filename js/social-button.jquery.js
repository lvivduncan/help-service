  
  $('.share-facebook').on('click',function(){window.open('https://facebook.com/sharer.php?display=popup&u='+window.location.href,'sharer','toolbar=0,status=0,resizable=1,width=626,height=436');return false});

  $('.share-twitter').on('click', function(){window.open('https://twitter.com/intent/tweet?text='+document.title+' '+window.location.href,'twitter','toolbar=0,status=0,resizable=1,width=626,height=436');return false});
  
  $('.share-linkedin').on('click',function(){window.open('https://linkedin.com/shareArticle?mini=true&url=' + window.location.href+'&title='+document.title,'linkedin','toolbar=0,status=0,resizable=1,width=626,height=436');return false});
  
  $('.share-telegram').on('click',function(){window.open('https://telegram.me/share/url?url='+window.location.href+'&text='+document.title,'telegram','toolbar=0,status=0,resizable=1,width=626,height=436');return false});
  
  $('.share-viber').on('click',function(){window.open('viber://forward?text='+document.title+' '+window.location.href,'viber','toolbar=0,status=0,resizable=1,width=626,height=436');return false});
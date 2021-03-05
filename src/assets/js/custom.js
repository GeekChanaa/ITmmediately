

    $(document).ready(function() {
     
        $(".owl-carousel").owlCarousel({
            navigation : true, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            items : 1, 
            itemsDesktop : false,
            itemsDesktopSmall : false,
            itemsTablet: false,
            itemsMobile : false
       
        });
       
      });
      var changed = false;
      function changeTitle(){
          if(!changed){
            $('.title1').css('display','none');
            $('.title2').css('display','block');
            changed=true;
          }
          else{
            $('.title1').css('display','block');
            $('.title2').css('display','none');
            changed=false;
          }
          setTimeout(() => {
            changeTitle();
          }, 6000);
      }

      setTimeout(() => {
        changeTitle();
      }, 6000);



  
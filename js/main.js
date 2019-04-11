(function($) {

  $(function(){
    $('.tabs-caption__item:first').addClass('tabs-caption__item--active');
    $('.tabs-content__item:first').css('display', 'block');
  })
 
  $('.tabs-caption__item').not('.tabs-caption__item--active').click(function(){
    var index = $(this).index();
    var content = $('.tabs-content__item').eq(index);
    $(this).addClass('tabs-caption__item--active').siblings().removeClass('tabs-caption__item--active');
    $('.tabs-content__item').css('display', 'none').eq(index).css('display', 'block');
  })

  

  $(".projects-list__more-icon").click(function() {
    $(this).parents(".projects-list__item").find(".projects-list__more").slideToggle(300);
    $(this).toggleClass('projects-list__more-icon--open')

})

  $(".header__dropdown-btn").click(function() {
    $('.header__dropdown-list').toggleClass('header__dropdown-list--open')
    $(this).find(".header__dropdown-arrow").toggleClass('header__dropdown-arrow--open')
})

  $(".header__menu-btn").click(function() {
      $('.nav').addClass('nav--open')
  })

 $(function(){
  $(document).click(function(event) {
    if ($(event.target).closest(".nav").length || $(event.target).closest(".header__menu-btn").length) return;
     $('.nav').removeClass('nav--open')
    event.stopPropagation();
  });
});


var height =  $(window).height();
var blockheight = (height - 396) + 'px';
var blockheight2 = (height - 295) + 'px';

        
$(".projects-list").css("height", blockheight);
$(".projects-list").css("min-height", '409px');
$(".users-list").css("height", blockheight2);
$(".users-list").css("min-height", '510px');


$(window).resize(function() {
  var height =  $(window).height();
  var blockheight = (height - 393) + 'px';
  var blockheight2 = (height - 292) + 'px';
 
  $(".projects-list").css("height", blockheight);
  $(".projects-list").css("min-height", '409px');
  $(".users-list").css("height", blockheight2);
  $(".users-list").css("min-height", '510px');

 })


 /*select*/


 

})(jQuery);
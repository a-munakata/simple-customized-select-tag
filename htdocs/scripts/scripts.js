(function($){
  $(document).ready(function(){
    $(document).on "change", ".select select", (e) ->
      $(e.currentTarget).closest(".select").find(".display").html(
        $(e.currentTarget).find("option:selected").html()
      );
  });
})(jQuery);
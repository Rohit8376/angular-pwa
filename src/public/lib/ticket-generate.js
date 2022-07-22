 $(document).ready(function () { 
      var height = $(".navbar").height();
      if (height > 0) {
        $(".main").css("margin-top", height + 30);
      }  
      (async () => {
         const response = await fetch('https://sleepy-gorge-24178.herokuapp.com/?UserId=qliktraining1');
         const data = await response.json(); 
         var script = $("<script>");
         script.attr("src", `https://qliksenseserver.exponentia.ai/resources/assets/external/requirejs/require.js?qlikTicket=${data.ticket}`);
         script.attr("data-main", 'main.js');
         $("head").append(script); 
       })(); 
  })  
require.config({
    baseUrl: 'https://qliksenseserver.exponentia.ai/resources'
});

var prefix = "/";

var config = {
    host: "qliksenseserver.exponentia.ai",
    prefix: prefix,
    port: 443,
    isSecure: true
};

require(['js/qlik'], function (qlik) {

    qlik.on("error", function (error) {
        console.log(error);
        alert(error)
    });

    var global = qlik.getGlobal(config);

    global.getAuthenticatedUser().then(function (reply) {
        console.log("working fine as expacted ");
        console.log(reply)
    })

      const app = qlik.openApp('b4f2b025-fbd8-4c71-bda1-d0e168370673', config);
      $('.objonetwo').click(function(data){    
        const obj_id = $(this).attr("data-obj"); 
        app.getObject(obj_id).then(function(model){
            var d = app.table(model);
            d.exportData({'format':'CSV_C','state':'A','filename': 'exportdata.csv','download': true})
        })
     }) 

})


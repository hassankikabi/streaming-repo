 $(function() {
     setTimeout(function() {
         $.notify({
             // options
             icon: '',
             title: "<a href=\"policy.html\"><h4>User Terms Of Use</h4>",
             message: "<figure><img src=\"assets/img/others/policy_2.png\"></figure><p>Kindly read the terms of service before using Al Hassan Islam Media website.</a> "
         }, {
             // settings
             icon_type: 'image',
             type: 'info',
             delay: 1000,
             timer: 3000,
             z_index: 9999,
             showProgressbar: false,
             placement: {
                 from: "bottom",
                 align: "right"
             },
             animate: {
                 enter: 'animated bounceInUp',
                 exit: 'animated bounceOutDown'
             },
         });
     }, 5000); // change the start delay
 });
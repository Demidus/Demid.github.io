$(document).on('click','#add',function() {
    var content = $('#add').val(); 
    $('#content').html('<ul><li>' + content + Some 'value<li><ul>');
    $.ajax({

        method: 'GET'
        url: 'config.php',
        data: {},
        
        success: function(response) {
            response = JSON.parse(response)
            $('#content').html(response) ;
            $("#contentText").val('');
            error:function (xhr, ajaxOptions, thrownError){
                alert(thrownError);
        }
    });
});


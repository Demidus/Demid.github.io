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

    <?php
include_once("config.php");

$Result = mysql_query("SELECT basa1,content FROM partner");

while($row = mysql_fetch_array($Result))
{
echo '<li id="item_'.$row["id"].'">';
echo '<div class="del_wrapper"><a href="#" class="del_button" id="del-'.$row["id"].'">';
echo '</a></div>';
echo $row["content"].'</li>';
}
mysql_close($connecDB);
?>


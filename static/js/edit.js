$(document).ready(function(){
    $('.note-editable').attr('dir','rtl');
    $('#toggle-country').click(function () {
            $('#summernote').summernote();
            $('#submit').css('visibility', 'visible');
            $('.note-editable').attr('dir','rtl');
    });

    
});
function summernote(){
    $("#summernote").summernote();
    $("#submit").css('visibility','visible');
}
function send(ngo,request){
    var text = $('#summernote').code();
    $.ajax({
        type:"POST",
        beforeSend: function (request)
        {
            request.setRequestHeader("X-CSRFToken", $.cookie('csrftoken'));
        },

        data:{
            'request':request,
            'data':text
        },
        url: "/",
        //processData: false,
        success: function(msg) {
            alert('اطلاعات به روز شد');
            $('#summernote').destroy();
             $('#submit').css('visibility', 'hidden');
        }
    });
}
function delete_photo(id){
     $.ajax({
        type:"GET",
        url: "/user/deletephoto/"+id+"/",
        //processData: false,
        success: function(msg) {
            location.reload()
        }
    });

}
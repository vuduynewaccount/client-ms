let admin_host="https://authenticate.maytinh.repl.co";


let token;
let login_func=function(){
  let username=$("#username").val();
  let password=$("#password").val();
  $.ajax({
		url : admin_host+'/api-authenticate/login',
		type: "post",
		data : {
      username:username,
      password:password
    }
	}).done(function(response){ //token
		token =response;
    if(token!="login fail"){
      showAdminDashboard();
    }else{
      alert(token)
    }
	});
}

let validate_func=function(){
  $.ajax({
		url : admin_host+'/api-authenticate/validate',
		type: "post",
		data : {
      token:token
    }
	}).done(function(response){ //token
		console.log(response)
	});
}
let showAdminDashboard=function(){
   $("#main").empty();
  $("#main").append(`
    <h2>Create post</h2>
    <form method="POST" action="/api-post/create">
      <div class="form-group">
        <label for="title">title</label>
        <input type="text" class="form-control" id="title" name="title" placeholder="title">
      </div><br>
      <div class="form-group">
        <label for="description">description</label>
        <input type="text" class="form-control" id="description" placeholder="description" name="describe">
      </div><br>
      <div class="form-group">
        <label for="thumbnail">thumbnail</label>
        <input type="text" class="form-control" id="thumbnail" placeholder="thumbnail" name="thumbnail">
      </div><br>
      <div class="form-group">
        <label for="min_read">min_read</label>
        <input type="number" class="form-control" id="min_read" placeholder="min_read" name="min_read">
      </div><br>
      <div class="form-group">
        <label for="content">content</label>
        <input type="text" class="form-control" id="content" placeholder="content" name="content">
      </div><br>
      <div class="form-group">
        <label for="tags">tags</label>
        <input type="text" class="form-control" id="tags" placeholder="tags" name="tags">
      </div>
      <input type="submit" value="submit">
    </form>
    <br>
    <br>
    <br>
    <h2>Delete Post</h2>
    <form method="POST" action="/api-post/delete">
      <div class="form-group">
        <label for="id">id post</label>
        <input type="text" class="form-control" id="id" name="id" placeholder="id">
      </div>
       <input type="submit" value="submit">
    </form>
  `)
}
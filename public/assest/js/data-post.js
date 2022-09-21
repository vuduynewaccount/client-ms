let url=window.location.href;
let idPost=url.split('/')[url.split('/').length-1]
//post
$.get("/api-post/get/"+idPost, function(data, status){
  console.log(data)
  $("#post-title").append(`${data.title}`);
  $("#create-at").append(`${data.create_at.split("T")[0]}`);

  for(let i=0;i<data.data.length;i++){
    if(data.data[i].type_content=="p"){
      $("#entry-content").append(`<p>${data.data[i].value}</p>`)
    }
    if(data.data[i].type_content=="h3"){
      $("#entry-content").append(`<h3>${data.data[i].value}</h3>`)
    }
    if(data.data[i].type_content=="img"){
      $("#entry-content").append(`<p><img loading="lazy" class="aligncenter size-full wp-image-7318" src="${data.data[i].value}"></p>`)
    }
  }
});

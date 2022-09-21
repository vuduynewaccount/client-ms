//diary
$.get("https://client.maytinh.repl.co/api-post/list", function(data, status){
  for(let i=data.length-1;i>=0;i--){
    $("#post").append(`
        <div class="bcvpost">
          <article class="bcvart" id="post-7335">
            <header class="entry-header-blog">
              <div class="entry-meta"></div>
              <h2 class="entry-title">
                <a href="/post/${data[i]._id}" rel="bookmark">${data[i].title}</a>
              </h2>
            </header>
            <div class="entry-content-excerpt">
              <div class="entry-meta">
                <time class="entry-date published">
                  <a href="/post/${data[i]._id}" rel="bookmark">${data[i].create_at.split('T')[0]}</a>
                </time>
              </div>
              <p>${data[i].describe.substring(0,113)} &hellip;</p>
            </div>
            <figure class="entry-thumbnail thumbnail">
              <a href="/post/${data[i]._id}" rel="bookmark">
                <img width="350" height="350" src="${data[i].thumbnail}" class="attachment-thumbnail size-thumbnail wp-post-image" alt="" loading="lazy" />
              </a>
            </figure>
          </article>
        </div>
      `)
  }
});
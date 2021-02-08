// config.language_defaultをrootに
hexo.extend.filter.register('post_permalink', function(data){
    const { config } = this;
    console.log(data)
    return data.replace(config.language_default+"/", "")
});
  
// hexo.extend.filter.register('before_generate', function(data){
//     const { config } = this;
//     if(data.lang == config.language_default){
//         data.lang = ""
//     }
//     return data
// })

// // var images = [];
// hexo.extend.tag.register('medias_mover',function(args, content){
//   return ""
// }, true)
// //
// hexo.extend.filter.register('after_post_render', function(data){
// if(data.lang == hexo.config.language_default){
//   data.lang  = "";
// }
// })
//   if(data.title === "test"){
//     data.content += "{% medias_mover %}\n{% imsize %}"+`
//       src: top.jpg
//       alt: Dell Precision 5510 repair
//       title: Cool beans!
//       profile: thumbnail
//       link: true
//       linkProfile: huge
//     `+"{% endimsize %}\n{% endmedias_mover %}"
//   }
//   return data;
// });
// //
// hexo.extend.filter.register('after_post_render', function(data){
//   // data.title_show = "jacked"
//   // if(data.title === "test"){
//   //   data.medias.forEach(function(key, media){
//   //     console.log(key, media);
//   //     console.log(images);
//   //     if(media.indexOf("=") == -1){
//   //       // if not YouTube
//   //       images.forEach(function(image){
//   //         if(image.indexOf(media) != -1){
//   //           data.media[key] = image;
//   //           console.log(image);
//   //         }
//   //       })
//   //     }
//   //   })
//   // }
//   return data;
// });
// //
// // hexo.extend.filter.register('new_post_path', function(data, replace){
// //   // console.log(data, replace);
// //   // data.lang = "ja";
// //   // data.path = "ja/"
// //   // hexo.post.create(data, replace);
// // });

const router = require('koa-router')()
const urlencode = require('urlencode');
const translate = require('../translate/google-translate-api');
var got = require('got');

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.post('/google/translate', async (ctx, next) => {
  var body = ctx.request.body
  var resourceLanguage = body.resourceLanguage;
      if(resourceLanguage===undefined){
          ctx.body = {
            error:1,
            msg:'resourceLanguage字段不能为空'
          }
          return;
      }
  var targetLanguage = body.targetLanguage;
        if(targetLanguage===undefined){
          ctx.body = {
            error:1,
            msg:'targetLanguage字段不能为空'
          }
          return;
        }
  var translateResource =body.translateResource;
    if(translateResource===undefined){
        ctx.body = {
          error:1,
           msg:'translateResource字段不能为空'
        }
        return;
    }


  try{
      await translate(translateResource,{from: resourceLanguage, to: targetLanguage}).then(function(result){
        ctx.body = result.text
      });

  }catch(e){

/*    var uri = '获取代理ip的接口'

    var proxyUri = ''
    await got(uri).then(function(res){
     
      proxyUri = res.body
     })
    
     console.log("正在使用代理ip",proxyUri)
    // 代理ip
    await translate(translateResource,{from: resourceLanguage, to: targetLanguage,proxyUri:proxyUri}).then(function(result){
      ctx.body = result.text
    });*/
  }

})



module.exports = router

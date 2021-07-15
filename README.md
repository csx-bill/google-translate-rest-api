# google-translate-rest-api

## 安装命令
1.
npm install -g cnpm --registry=https://registry.npm.taobao.org

2.
npm install

3. 启动命令

开发模式
npm run dev

npm start

访问地址

http://localhost:3000/google/translate

请求方式 
POST

请求头
Content-Type application/json

请求参数


{
    "resourceLanguage":"en",
    "targetLanguage":"zh-cn",
    "translateResource":"hello"
}




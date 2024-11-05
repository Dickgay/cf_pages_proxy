export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    let targetUrl = new URL(env.TARGET_URL); // 从环境变量中获取完整的目标 URL
    
    // 自动设置协议、主机名和端口
    url.protocol = targetUrl.protocol;
    url.hostname = targetUrl.hostname;
    url.port = targetUrl.port;

    return fetch(new Request(url, request));
  },
};

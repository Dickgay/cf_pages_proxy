export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    let targetUrl = new URL(env.TARGET_URL);

    // 拼接路径和查询参数
    url.pathname = url.pathname;
    url.search = url.search;
    url.protocol = targetUrl.protocol;
    url.hostname = targetUrl.hostname;
    url.port = targetUrl.port;

    // 保留请求方法、头部和主体，直接转发
    return fetch(new Request(url, request));
  },
};

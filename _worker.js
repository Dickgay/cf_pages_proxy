export default {
  async fetch(request, env) {
    // 获取目标后端地址
    const targetUrl = new URL(env.TARGET_URL);
    const requestUrl = new URL(request.url);

    // 替换目标地址的主机和协议
    requestUrl.protocol = targetUrl.protocol;
    requestUrl.hostname = targetUrl.hostname;
    requestUrl.port = targetUrl.port;

    // 转发请求，保持原始信息
    return fetch(new Request(requestUrl.toString(), request));
  },
};

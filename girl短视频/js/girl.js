$(function () {

  const url = 'https://tucdn.wpon.cn/api-girl/index.php?wpon=302'

  // function getGirlMp4(url) {
  //   $.get(url, {
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     }
  //   }, res => {
  //     console.log(res);
  //   })
  // }
  function getGirlMp4(url) {
    $.ajax({
      url: url,
      // 代表我们要发起JSONP的数据请求
      // 如果要使用 $.ajax() 发起 JSONP 请求，必须指定 datatype 为 jsonp
      dataType: 'jsonp',
      // 发送到服务端的参数名称，默认值为 callback
      // jsonp: 'callback',
      // 自定义的回调函数名称，默认值为 jQueryxxx 格式
      // jsonpCallback: 'abc',
      success: function (res) {
        console.log(res)
      }
    })
  }

  getGirlMp4(url);

})
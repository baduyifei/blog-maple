const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    loop: 'all',
    mini: true,
    theme: '#333',
    preload: 'auto',
    listFolded: true,
    audio: [
    {
        name: "如愿",
        artist: '王菲',
        url: 'https://cdn.jsdelivr.net/gh/baduyifei/tuchuang/ruyuan.mp3',
        cover: 'https://wenqidao.oss-cn-shanghai.aliyuncs.com/img/202309150523977.png', 
    },
    {
        name: "左手指月",
        artist: '萨顶顶',
        url: 'https://cdn.jsdelivr.net/gh/baduyifei/tuchuang/zuoshouzhiyue.mp3',
        cover: 'https://wenqidao.oss-cn-shanghai.aliyuncs.com/img/202309150523977.png', 
    },
    {
        name: "小镇英雄青年",
        artist: '王贰浪',
        url: 'https://cdn.jsdelivr.net/gh/baduyifei/tuchuang/xiaozhenqingnian.mp3',
        cover: 'https://wenqidao.oss-cn-shanghai.aliyuncs.com/img/202309150523977.png', 
    },
    ]
});
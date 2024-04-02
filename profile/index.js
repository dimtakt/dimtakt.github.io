// 링크 연결
$(".c_discord").on("click", function () {
    location.href = "discord://discord.com/users/150166254290862080"
})
$(".c_steam").on("click", function () {
    location.href = "https://steamcommunity.com/id/1951929/"
})
$(".c_github").on("click", function () {
    location.href = "https://github.com/dimtakt"
})
$(".spotify_link").on("click", function () {
    location.href = "https://spotify-github-profile.vercel.app/api/view?uid=wagt04j2x2k2rbriz8t6fj9l8&redirect=true"
})

// 5초마다 자동 갱신
// 더미 랜덤값을 붙이는 식으로 다른 페이지를 불러오는 것처럼 속여서 새로고침함
setInterval(() => {
    let image_url = $(".spotify_link").attr("src")
    $(".spotify_link").attr("src", image_url + `?v=${Math.random()}`)
}, 5000);


console.log("멀봐 ㅡㅡ")
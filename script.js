function copy() {
    var username = prompt("Enter your github userName is small letters: ");
    var image = document.getElementById("image");
    var row11 = document.getElementById("row11");
    var row12 = document.getElementById("row12");
    var row21 = document.getElementById("row21");
    var row31 = document.getElementById("row31");
    var row32 = document.getElementById("row32");
    var row32Link = document.getElementById("row32link");
    var row41 = document.getElementById("row41");
    var row42 = document.getElementById("row42");
    var row42Link = document.getElementById("row42link");
    var row51 = document.getElementById("row51");
    var row52 = document.getElementById("row52");
    var row52Link = document.getElementById("row52link");
    var row61 = document.getElementById("row61");
    var row62 = document.getElementById("row62");
    var row71 = document.getElementById("row71");
    var row72 = document.getElementById("row72");
    var row81 = document.getElementById("row81");
    var row82 = document.getElementById("row82");
    var row91 = document.getElementById("row91");
    var row92 = document.getElementById("row92");
    var row92Link = document.getElementById("row92link");
    var github = document.getElementById("github");
    var linkedin = document.getElementById("linkedin");
    const repo = `
    <img src="${image.value}" width="100%" padding="10px">
<h1 align="center">${row11.value} ${row12.value}</h1>
<h3 align="center">${row21.value}</h3>
<img src="http://studiopixel.in/wp-content/uploads/2017/11/senior-front-end-developer-openings-1.gif" alt="MarineGEO circle logo" width="60%" align="center">

<p align="left"> <img src="https://komarev.com/ghpvc/?username=${username}&label=Profile%20views&color=0e75b6&style=flat" alt="${username}" /> </p>

<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=${username}" alt="${username}" /></a> </p>

- ${row31.value} [**${row32.value}**](${row32Link.value})

- ${row41.value} [**${row42.value}**](${row42Link.value})

- ${row51.value} [**${row52.value}**](${row52Link.value})

- ${row61.value} **${row62.value}**

- ${row71.value.value} **${row72.value}**

- ${row81.value} **${row82.value}**

- ${row91.value} [${row92.value}](${row92Link.value})

<h3 align="left">Connect with me: </h3>
<p align="left">
<a href="https://linkedin.com/in/${linkedin.value}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="Abdul Qadir" height="30" width="40" /></a>
<a href="https://www.leetcode.com/${github.value}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="Abdul Qaidr" height="30" width="40" /></a>
</p>
<hr>
<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=${username}&show_icons=true&locale=en&layout=compact" alt="azaanullah-khan" /></p>
<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&locale=en" alt="Abdul Qadir" /></p>
<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=${username}&" alt="Abdul Qadir" /></p>
`
console.log(repo);
alert("Your Readme code has Printed in console you can copy")
}
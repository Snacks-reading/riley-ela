<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Lesson — Riley Reads & Spells</title>

<style>
body{
margin:0;
background:#0e1630;
font-family:system-ui;
color:white;
}

main{
display:grid;
grid-template-columns:1fr 1fr .7fr;
height:100vh;
gap:12px;
padding:12px;
}

.panel{
border-radius:18px;
overflow:hidden;
background:#0b1124;
position:relative;
}

.panel img{
width:100%;
height:100%;
object-fit:cover;
}

.overlay{
position:absolute;
left:10%;
right:10%;
top:16%;
bottom:10%;
color:#5b360d;
font-family:Georgia,serif;
overflow:auto;
}

.practice{
position:absolute;
left:12%;
right:12%;
top:28%;
text-align:center;
color:#5b360d;
}

.practice input{
margin-top:18px;
padding:14px;
border-radius:12px;
border:2px solid #7f531b;
font-size:20px;
text-align:center;
}

.avatar{
border-radius:18px;
overflow:hidden;
background:#0b1124;
}

</style>
</head>

<body>

<main>

<div class="panel">

<img src="assets/originals/guard-the-vowel-teach.jpeg">

<div class="overlay">

<h2>floss rule</h2>

<b>Rule</b>
<p>
In short one-syllable words with one short vowel,
f, l, s, and z are often doubled at the end.
</p>

<b>Why it matters</b>
<p>
This spelling pattern signals the short vowel
and helps writers spell common short words correctly.
</p>

<b>When to use it</b>
<p>
Use FLOSS when a short vowel is followed immediately
by f, l, s, or z at the end of a short word.
</p>

<b>Examples</b>

<ul>
<li>hill</li>
<li>class</li>
<li>buzz</li>
<li>stuff</li>
<li>bell</li>
<li>miss</li>
</ul>

<b>Near-miss / does not apply</b>

<ul>
<li>multi-syllable words like taxi or music</li>
<li>long vowel words like seal or toast</li>
<li>irregular short words such as gas, bus, yes, and this</li>
</ul>

</div>

</div>


<div class="panel">

<img src="assets/originals/spell-the-word-practice.jpeg">

<div class="practice">

<div>
He carried a heavy ______ to the castle.
</div>

<input placeholder="Type the word">

</div>

</div>


<div class="avatar">

<img src="assets/avatars/avatar_teach.png" style="width:100%">

</div>

</main>

</body>
</html>
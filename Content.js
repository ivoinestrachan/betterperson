const generateHTML = (pageName) => {
  return `
<div class='container'>
  <h1>F0CUS BRO</h1>
  <div class='quote'>quote of the day: “All progress takes place outside the comfort zone.” </div>

<div class='gympage'> GYM is better than ${pageName}</div>
<div class="vid">
<iframe width="560" height="315" src="https://www.youtube.com/embed/bGhBbpObA7s?autoplay=1" allow="autoplay" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>
  `
}

const generateSTYLING= () => {
  return `
  <style>
  body{
    background: black;
  }
  .vid{
    margin-top: 20px;
  }
  .container {
    font-size 20px;
    margin-top: 200px;
    color: white;
    text-align: center;
    align-items: center;
  }

  .gympage{
    margin-top: 10px;
  }
  </style>
  `
}

switch (window.location.hostname) {
  case 'www.youtube.com':
    document.head.innerHTML = generateSTYLING()
    document.body.innerHTML = generateHTML('youtube');
  break;

}

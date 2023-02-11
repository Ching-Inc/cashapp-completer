<!DOCTYPE html>
<html>
<head>
<!--    <link rel="stylesheet" type="text/css" href="alert.scss">-->
    <style>
        #game-container {
            width: 500px;
            height: 500px;
            background-color: lightblue;
            position: relative;
        }

        .bird {
            width: 50px;
            height: 50px;
            background-image: url('https://via.placeholder.com/50x50');
            background-size: cover;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }
    </style>
</head>
<body>
<div id="game-container">
    <div class="bird"></div>
</div>
<script>
    const bird = document.querySelector('.bird');
    let yPos = 0;
    let gravity = 1;

    setInterval(() => {
        yPos += gravity;
        bird.style.bottom = yPos + 'px';
        gravity += 0.5;
    }, 30);

    document.addEventListener('keydown', event => {
        if (event.code === 'Space') {
            yPos -= 20;
            bird.style.bottom = yPos + 'px';
            gravity = 1;
        }
    });
</script>
</body>
</html>

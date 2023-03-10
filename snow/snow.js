const createSnow = (n) => {
  const style = document.createElement("style");

  style.textContent = `
  body {
    position: relative;
  }
  .snow {
    position: fixed;
    width: 30px;
    height: 30px;
    top: -30px;
    background-repeat: no-repeat;
    z-index: 800;
    animation-name: fall;
    animation-timing-function: linear;
    pointer-events: none;
    background-position: center;
    transform: rotateY(180deg);
  }

  @keyframes fall {
    100% {
      transform: translate(-5vw, 100vh) rotate(180deg);
      
    }
  }
  `;

  document.head.append(style);

  let start = 1;
  const count = 4;

  const createSnowItem = () => {
    const snowItem = document.createElement("div");

    snowItem.classList.add("snow");

    const time = (Math.random() * 10 + 2) * n * 1000;

    snowItem.style.cssText = `
    left: ${Math.random() * document.documentElement.clientWidth}px;
    background-image: url('snow/snowflake${start}.svg');
    animation-duration: ${time}ms;
    `;

    if (start === count) {
      start = 1;
    } else {
      start++;
    }

    document.body.append(snowItem);

    setTimeout(() => {
      snowItem.remove();
    }, time);
  };

  setInterval(createSnowItem, 50);
};

createSnow(1);

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>The Lost Chord</title>

  <!-- 폰트 -->
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Noto+Sans+KR&display=swap" rel="stylesheet">

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Noto Sans KR', sans-serif;
      background: #5a4633;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }

    .container {
      width: 100%;
      max-width: 420px;
      padding: 20px;
    }

    .card {
      background: #f3e4c8;
      border-radius: 10px;
      padding: 40px 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      position: relative;
      text-align: center;
    }

    /* 종이 질감 느낌 */
    .card::before {
      content: "";
      position: absolute;
      inset: 0;
      background: url("https://www.transparenttextures.com/patterns/paper-fibers.png");
      opacity: 0.3;
      border-radius: 10px;
    }

    .content {
      position: relative;
      z-index: 1;
    }

    .subtitle {
      font-size: 12px;
      letter-spacing: 2px;
      color: #6b5a45;
      margin-bottom: 20px;
    }

    .title {
      font-family: 'Playfair Display', serif;
      font-size: 36px;
      line-height: 1.2;
      margin-bottom: 20px;
      color: #3b2f25;
    }

    .korean {
      font-size: 16px;
      color: #4b3d30;
      margin-bottom: 40px;
    }

    .date {
      font-size: 14px;
      letter-spacing: 1px;
      color: #6b5a45;
    }

    /* 입력창 */
    .input {
      width: 100%;
      padding: 12px;
      border: none;
      border-bottom: 2px solid #6b5a45;
      background: transparent;
      font-size: 20px;
      font-family: 'Gaegu', cursive;
      outline: none;
      margin-bottom: 20px;
    }

    /* 버튼 */
    .button {
      width: 100%;
      padding: 14px;
      background: #6b5a45;
      color: #fff;
      border: none;
      border-radius: 6px;
      font-size: 18px;
      cursor: pointer;
      transition: 0.2s;
      box-shadow: 0 4px 0 #4a3b2d;
      margin-bottom: 20px;
    }

    .button:active {
      transform: translateY(3px);
      box-shadow: 0 1px 0 #4a3b2d;
    }

    /* 장식 요소 */
    .corner {
      position: absolute;
      width: 60px;
      height: 60px;
      background: rgba(0,0,0,0.05);
      border-radius: 50%;
    }

    .corner.top-left {
      top: -20px;
      left: -20px;
    }

    .corner.bottom-right {
      bottom: -20px;
      right: -20px;
    }

    @media (max-width: 380px) {
      .title {
        font-size: 30px;
      }
    }

  </style>
</head>

<body>
  <div class="container">
    <div class="card">
      <div class="corner top-left"></div>
      <div class="corner bottom-right"></div>

      <div class="content">
        <div class="subtitle">TGW YOUTH CHURCH</div>

        <div class="title">
          The Lost<br>Chord
        </div>

        <div class="korean">
          잃어버린 선율을 찾아서
        </div>

        <button class="button" onclick="location.href='6rvg.html' ">시작하기</button>

        <div class="date">
          APRIL 22 2026
        </div>
      </div>
    </div>
  </div>
</body>
</html>

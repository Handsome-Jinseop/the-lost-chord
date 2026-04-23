const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const current = document.getElementById("current");
const duration = document.getElementById("duration");
const btn = document.getElementById("audioBtn");

function checkAnswer(correct, nextPage) {
  const input = document.getElementById("answer").value.trim();
  const result = document.getElementById("result");

  if (input === correct) {
    location.href = nextPage;
  } else {
    result.innerHTML = "틀렸습니다...";
    result.className = "result fail";
  }
}

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    btn.innerText = "⏸";
  } else {
    audio.pause();
    btn.innerText = "▶";
  }
}

/* 재생바 업데이트 */
audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percent + "%";

  current.innerText = formatTime(audio.currentTime);
});

/* 총 길이 표시 */
audio.addEventListener("loadedmetadata", () => {
  duration.innerText = formatTime(audio.duration);
});

/* 클릭으로 이동 */
function seek(e) {
  const width = e.currentTarget.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

/* 시간 포맷 */
function formatTime(time) {
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60);
  return `${min}:${sec.toString().padStart(2, "0")}`;
}

function toggleVideo() {
  const video = document.getElementById("video");

  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
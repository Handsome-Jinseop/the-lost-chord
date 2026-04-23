const LOCATIONS = {
  jeonmang: { lat: 37.514780347721285, lng: 127.30146269952265 },
  swing: { lat: 37.514624850725895, lng: 127.30060808389632 },
  book: { lat: 37.51302315843737, lng: 127.29800581127128 },
  water: { lat: 37.51376289405838, lng: 127.29494912734121 },
  boat: { lat: 37.51372568492404, lng: 127.29988622939489 }
};

// 허용 거리 (미터)
const ALLOW_DISTANCE = 30;

// 거리 계산 함수 (Haversine)
function getDistance(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const toRad = (deg) => deg * Math.PI / 180;

  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);

  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLng/2) * Math.sin(dLng/2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c;
}

// 📍 위치 확인
function checkLocation(placeName) {
  const status = document.getElementById("status");
  const target = LOCATIONS[placeName]

  if (!target) {
    status.innerText = "잘못된 장소 설정";
    return;
  }

  if (!navigator.geolocation) {
    status.innerText = "GPS를 지원하지 않는 기기입니다.";
    return;
  }

  status.innerText = "위치 확인 중...";

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const d = getDistance(
        pos.coords.latitude,
        pos.coords.longitude,
        target.lat,
        target.lng
      );

      if (d <= ALLOW_DISTANCE) {
        document.getElementById("blocker").classList.add("hidden");
      } else {
        status.innerText = `목표 지점과 ${Math.round(d)}m 떨어져 있습니다.`;
      }
    },
    () => {
      status.innerText = "위치 권한을 허용해주세요.";
    }
    
  );
}

let tapCount = 0;

document.addEventListener("DOMContentLoaded", () => {
  const pin = document.getElementById("pin");

  pin.addEventListener("click", () => {
    tapCount++;

    if (tapCount >= 10) {
      document.getElementById("blocker").classList.add("hidden");
    }
  });
});

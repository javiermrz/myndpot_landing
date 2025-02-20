function detectDevice() {
  // Use modern userAgentData API if available
  if (navigator.userAgentData) {
    const platform = navigator.userAgentData.platform.toLowerCase();
    if (platform.includes("android")) return "Android";
    if (platform.includes("ios") || platform.includes("iphone") || platform.includes("ipad")) return "iOS";
    return "Computer";
  }

  // Fallback for older browsers
  const userAgent = navigator.userAgent.toLowerCase();
  if (/android/.test(userAgent)) return "Android";

  // Modern iPads report themselves as MacOS, so check screen size
  if (/ipad|iphone|ipod/.test(userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  ) {
    return "iOS";
  }

  return "Computer";
}

document.addEventListener("DOMContentLoaded", function () {
  const deviceType = detectDevice();
  // const deviceType = 'Android';
  const androidBtn = document.getElementsByClassName("android-button")[0];
  const iosBtn = document.getElementsByClassName("ios-button")[0];
  const pcButtons = document.getElementsByClassName("pc-button");

  if (deviceType === "Android") {
    androidBtn.classList.remove("hidden");
  } else if (deviceType === "iOS") {
    iosBtn.classList.remove("hidden");
  } else {
    Array.from(pcButtons).forEach((button) => button.classList.remove("hidden"));
  }
});

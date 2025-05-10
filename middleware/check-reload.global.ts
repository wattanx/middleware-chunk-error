export default defineNuxtRouteMiddleware(() => {
  const count = window.localStorage.getItem("count");
  if (count) {
    window.localStorage.setItem("count", String(Number(count) + 1));
  } else {
    window.localStorage.setItem("count", "1");
  }
  console.log("count", window.localStorage.getItem("count"));
});

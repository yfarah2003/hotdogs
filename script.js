function calculateConcessionItems() {
  const estimatedMovieGoers = parseInt(document.getElementById("estimatedMovieGoers").value);
  const dayOfWeek = document.getElementById("dayOfWeek").value.toLowerCase();
  
  let hotDogsNeeded = 0;
  let popcornNeeded = 0;
  let candyNeeded = 0;
  let sodaNeeded = 0;

  if (dayOfWeek === "monday" || dayOfWeek === "tuesday") {
    hotDogsNeeded = Math.round(0.08 * estimatedMovieGoers);
    popcornNeeded = Math.round(0.51 * estimatedMovieGoers);
    candyNeeded = Math.round(0.15 * estimatedMovieGoers);
    sodaNeeded = Math.round(0.38 * estimatedMovieGoers);
  } else if (dayOfWeek === "wednesday" || dayOfWeek === "thursday") {
    hotDogsNeeded = Math.round(0.1 * estimatedMovieGoers);
    popcornNeeded = Math.round(0.6 * estimatedMovieGoers);
    candyNeeded = Math.round(0.2 * estimatedMovieGoers);
    sodaNeeded = Math.round(0.5 * estimatedMovieGoers);
  } else if (dayOfWeek === "friday" || dayOfWeek === "saturday" || dayOfWeek === "sunday") {
    hotDogsNeeded = Math.round(0.12 * estimatedMovieGoers);
    popcornNeeded = Math.round(0.7 * estimatedMovieGoers);
    candyNeeded = Math.round(0.25 * estimatedMovieGoers);
    sodaNeeded = Math.round(0.6 * estimatedMovieGoers);
  }

  document.getElementById("hotDogsNeeded").innerHTML = hotDogsNeeded;
  document.getElementById("popcornNeeded").innerHTML = popcornNeeded;
  document.getElementById("candyNeeded").innerHTML = candyNeeded;
  document.getElementById("sodaNeeded").innerHTML = sodaNeeded;
}

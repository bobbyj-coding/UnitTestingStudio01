function launchOutput(num){
  if (num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0) {
  return "Rutabagas! That should not work.";
}
if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {
  return "LaunchCode Rocks!";
}
if (num % 2 === 0 && num % 3 === 0) {
  return "LaunchCode!";
}
if (num % 2 === 0 && num % 5 === 0) {
  return "Launch Rocks!";
}
if (num % 2 === 0) {
  return "Launch!";
} 
if (num % 3 === 0 && num % 5 === 0) {
  return "Code Rocks!"
}
if (num % 3 === 0) {
  return "Code!";
} 
if (num % 5 === 0) {
  return "Rocks!";
} 
  //your code here
}

module.exports = launchOutput;
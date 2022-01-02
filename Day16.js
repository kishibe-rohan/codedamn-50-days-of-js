function hey(msg) {
  // Code here

  //ALL CAPS
  if (msg === msg.toUpperCase() && msg.toUpperCase() !== msg.toLowerCase())
    return "Whoa, chill out!";

  //Is a loud question
  if (msg.charAt(msg.length - 1) === "?" && msg === msg.toUpperCase())
    return `Calm down, I know what I'm doing!`;

  //Normal question
  if (msg.charAt(msg.length - 1) === "?") return "Sure.";

  if (msg.trim().length === 0) return "Fine. Be that way!";
  else return "Whatever.";
}

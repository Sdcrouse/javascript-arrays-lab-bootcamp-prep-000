const app = "I don't do much."

function destructivelyAppendKitten(name) {
  window.kittens.push(name);
  return;
}

function destructivelyPrependKitten(kitty) {
  window.kittens.unshift(kitty);
  return;
}

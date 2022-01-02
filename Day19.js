const map = new Map();
map.set("black", 0);
map.set("brown", 1);
map.set("red", 2);
map.set("orange", 3);
map.set("yellow", 4);
map.set("green", 5);
map.set("blue", 6);
map.set("violet", 7);
map.set("grey", 8);
map.set("white", 9);

const colorCode = (color) => {
  // Code here

  return map.get(color);
};

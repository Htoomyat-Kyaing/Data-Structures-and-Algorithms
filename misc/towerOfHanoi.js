const towerOfHanoi = (n, startRod, endRod, middleRod) => {
  if (n === 1) {
    console.log(`Move disk 1 from ${startRod} to ${endRod}`);
    return;
  }
  towerOfHanoi(n - 1, startRod, middleRod, endRod);
  console.log(`Move disk ${n} from ${startRod} to ${endRod}`);
  towerOfHanoi(n - 1, middleRod, endRod, startRod);
};

// Big O - n^2

towerOfHanoi(3, "A", "C", "B");

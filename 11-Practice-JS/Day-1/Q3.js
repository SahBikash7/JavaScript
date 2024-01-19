// LeetCode Question : 2621

async function sleep(millis) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, millis);
  });
}

const t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100

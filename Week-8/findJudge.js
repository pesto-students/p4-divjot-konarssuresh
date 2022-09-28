// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.

// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.
// Constraints:

// 1 <= n <= 1000
// 0 <= trust.length <= 104
// trust[i].length == 2
// All the pairs of trust are unique.
// ai != bi
// 1 <= ai, bi <= n

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */

// time complexity o(n2) space complexity o(n2s)
const findJudge = (n, trust) => {
  const graph = Array(n)
    .fill(0)
    .map(() => Array());

  trust.forEach((t) => {
    let parent = t[0];
    let child = t[1];
    graph[parent - 1].push(child - 1);
  });

  let judge = -1;
  for (let i = 0; i < graph.length; i++) {
    if (graph[i].length === 0) {
      judge = i;
      break;
    }
  }

  if (judge !== -1) {
    for (let i = 0; i < graph.length; i++) {
      if (i !== judge) {
        let adjList = graph[i];
        let foundJudge = false;
        for (let j = 0; j < adjList.length; j++) {
          if (adjList[j] === judge) {
            foundJudge = true;
            break;
          }
        }
        if (!foundJudge) return -1;
      }
    }
    return judge + 1;
  }
  return -1;
};

console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ])
);

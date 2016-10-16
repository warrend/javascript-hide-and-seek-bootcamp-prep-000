function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested").querySelector(".target")
}

function increaseRankBy(n) {
  let rank = document.querySelectorAll(".ranked-list")
  for (var i = 0, l = rank.length; i < l; i++) {
    rank[i].innerHTML = parseInt(rank[i]) + n
  }
}

function deepestChild() {
  let current = document.querySelectorAll("div#grand-node")
  let currentChild = current[0].querySelectorAll(':first-child')
  for (var i = 0, l = currentChild.length; i < l; i++) {
    if (currentChild[i].querySelector(':first-child') !== undefined) {
       var answer = currentChild[i];
    }
  }
  return answer;
}
/*function find(array, criteriaFn) {
  let current = array
debugger
  let next = []
  while (current) {
    if (criteriaFn(current)) {
      return current
    }
    if (Array.isArray(current)) {
      for (let i = 0, l = current.length; i < l; i++) {
        next.push(current[i])
      }
    }
    current = next.shift()
  }

  // if we haven't
  return null
}*/

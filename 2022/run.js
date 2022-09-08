console.clear()

let infos = []
infos = [-1, -1, 1]
infos = [1, -1, 1, -1, -1, 1, 1, 1]
infos = [-1, -1, 2, -1, -1, -1, -1, -1, -1, -1, -1]
infos = [-1, -1, 1, 1, -1, -1, 1]

let crimeCount = copCount = 0

let i = 0
while (i < infos.length) {

  if (infos[i] > 0) copCount += infos[i]
  else if (infos[i] < 0) {
    if (copCount == 0) crimeCount++
    else copCount--
  }
  i++
}

console.log(crimeCount)
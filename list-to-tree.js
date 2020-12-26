function testSuit() {
  const list = [
    { id: 1, pId: 0, weight: 2, name: 'a' },
    { id: 8, pId: 0, weight: 1, name: 'c' },
    { id: 3, pId: 1, weight: 1, name: 'b' },
    { id: 4, pId: 0, weight: 10, name: 'c' },
    { id: 5, pId: 2, weight: 5, name: 'd' },
    { id: 2, pId: 6, weight: 3, name: 'e' },
    { id: 6, pId: 3, weight: 8, name: 'f' },
    { id: 7, pId: 6, weight: 12, name: 'g' },
  ]
  /**
   * time complexity: O(n^2)
   * @param {Array} list
   * @param {Array} nodes
   */
  function translateHelper(list, nodes) {
    if (!nodes || !nodes.length) return nodes

    nodes.forEach(currentNode => {
      list.forEach(elm => {
        if (elm.pId === currentNode.id) {
          if (!currentNode.children) {
            currentNode.children = []
          }
          currentNode.children.push(elm)
          currentNode.children.sort((n1, n2) => n1.weight - n2.weight)
        }
      })
      translateHelper(
        list.filter(elm => elm.pId !== currentNode.id),
        currentNode.children
      )
    })
  }

  function listToTree(list) {
    const root = [
      {
        id: 0,
        pId: 'Root',
        children: [],
      },
    ]
    translateHelper(list, root)
    // console.log(JSON.stringify(root, null, 2))
  }
  listToTree(list)
}

function testSuit2() {
  const list = [
    { id: 1, pId: 0, weight: 2, name: 'a' },
    { id: 8, pId: 0, weight: 1, name: 'c' },
    { id: 3, pId: 1, weight: 1, name: 'b' },
    { id: 4, pId: 0, weight: 10, name: 'c' },
    { id: 5, pId: 2, weight: 5, name: 'd' },
    { id: 2, pId: 6, weight: 3, name: 'e' },
    { id: 6, pId: 3, weight: 8, name: 'f' },
    { id: 7, pId: 6, weight: 12, name: 'g' },
  ]

  /**
   * time complexity: O(n)
   * @param {Array} list
   */
  function listToTree(list) {
    const lookUp = {}
    const roots = []

    const arr = [...list]

    arr.push({ id: 0, pId: 'ROOT' })

    arr.forEach((elm, index) => {
      lookUp[String(elm.id)] = index
      elm.children = []
    })

    arr.forEach(elm => {
      if (String(elm.pId) !== 'ROOT') {
        arr[lookUp[String(elm.pId)]].children.push(elm)
      } else {
        roots.push(elm)
      }
    })
    // console.log(JSON.stringify(roots, null, 2))
    return roots
  }

  listToTree(list)
}

function deepCopy(dist, source) {
  if (!source || !source.length || Object.is({}, source)) return source

  if (Array.isArray(source)) {
    source.forEach(elm => {
      deepCopy(dist, elm)
    })
  } else if (source && typeof source === 'object') {
    Object.keys(source).forEach(elm => {
      deepCopy(dist, source[elm])
    })
  } else {
    dist = source
  }
}

// const t = Date.now()
// for (let i = 0; i < 1e5; i++) {
//   testSuit()
// }
// console.log(Date.now() - t)

// const t2 = Date.now()
// for (let i = 0; i < 1e5; i++) {
testSuit2()
// }
// console.log(Date.now() - t2)

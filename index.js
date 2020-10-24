const inOrder = (node) => {
  if (node.left) inOrder(node.left);
  console.log(node.data)
  if (node.right) inOrder(node.right);
}

const findOrAdd = (rootNode, newNode) => {
  if (newNode.data > rootNode.data) {
    if (rootNode.right) {
      findOrAdd(rootNode.right, newNode)
    } else {
      rootNode.right = newNode
    }
  }

  if (newNode.data < rootNode.data) {
    if (rootNode.left) {
      findOrAdd(rootNode.left, newNode)
    } else {
      rootNode.left = newNode
    }
  }

  return true
}

const max = (node) => node.right ? max(node.right) : node

const min = (node) => node.left ? min(node.left) : node
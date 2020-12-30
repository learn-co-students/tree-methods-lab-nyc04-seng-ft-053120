function inOrder(root){
    if(root.left){
        inOrder(root.left)
    }
    console.log(root.data)
    if(root.right){
        inOrder(root.right)
    }
}
function findOrAdd(root,node){
    if(node.data===root.data){    
        return true
    }
    if(node.data<root.data){
        if(root.left){
           return findOrAdd(root.left,node)
        }else{
            return root.left=node
        }
    }
    if(node.data>root.data){
        if(root.right){
           return findOrAdd(root.right,node)
        }else{
            return root.right=node
    } 
}
}
function max(root){
    if(root.right){
       return max(root.right)
    }else{
        return root
    }
}
function min(root){
    if(root.left){
       return min(root.left)
    }else{
        return root
    }
}
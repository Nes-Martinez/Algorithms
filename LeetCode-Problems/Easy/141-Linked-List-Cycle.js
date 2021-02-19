const hasCycle = function (head) {
    const visited = []

    while(head != null) {
          if(visited.indexOf(head) !== -1) {
            return true
          } else {
            visited.push(head)
          }
          head = head.next
    }
    return false
  };
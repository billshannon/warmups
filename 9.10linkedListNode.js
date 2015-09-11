function LinkedList(head) {
  this.head = head;
}

function Node(data, next) {
  this.data = data;
  this.next = next;
}

function commonDataBetweenLists(list1, list2) {
  var output = [];

  function go (list1Node, list2Node) {
    if (!list1Node) return;

    function goAgain (list1Node, list2Node) {
      if (!list2Node) return;
      if (list1Node.data == list2Node.data) {
        output.push(list2Node.data);
      }
      return goAgain (list1Node, list2Node.next);
    }

    var list2Node = list2.head;
    goAgain(list1Node, list2Node);
    return go (list1Node.next, list2Node);
  }

  go(list1.head, list2.head);
  return output;
}

var l1 = new LinkedList(new Node("This is the head"));
var foo = new Node('fooski');
var bar = new Node('barski');
l1.head.next = foo;
foo.next = bar;

var l2 = new LinkedList(new Node("something cool!"));
var goo = new Node('gooski');
var bar2 = new Node('barski');
l2.head.next = bar2;
bar2.next = goo;

console.log(commonDataBetweenLists(l1, l2));
// ['barski']

function LinkedList(head) {
  this.head = head;
}

function Node(data, next) {
  this.data = data;
  this.next = next;
}

function sentenceToLinkedList(sentence) {
  var wordArray = sentence.split(' ');
  var output = new LinkedList(new Node(wordArray.shift()));
  var node = output.head;

  wordArray.forEach(function(word) {
    word = new Node(word);
    node.next = word;
    node = word;
  });
  return output;
}

var sentence = 'This is a typical sentence';
console.log(sentenceToLinkedList(sentence));

// { head: { data: 'This', next: { data: 'is', next: [Object] } } }

function node(value) {
  this.value = value;
  this.next = null;
}

function linkedList(inputList) {
  this.head = new node(inputList[0]);
  let current = this.head;
  for (let i = 1; i < inputList.length; i++) {
    current.next = new node(inputList[i]);
    current = current.next;
  }
}

linkedList.prototype.traverseList = function () {
  let current = this.head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
};

linkedList.prototype.getValue = function (position) {
  let current = this.head;
  while (--position) {
    if (current.next === null) {
      return;
    }
    current = current.next;
  }
  return current.value;
};

linkedList.prototype.addToStart = function (value) {
  const newNode = new node(value);
  newNode.next = this.head;
  this.head = newNode;
};

linkedList.prototype.addToEnd = function (value) {
  const newNode = new node(value);
  let current = this.head;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = newNode;
};

linkedList.prototype.addToPosiiton = function (value, position) {
  if (position === 0) {
    this.addToStart(value);
    return;
  }
  const newNode = new node(value);
  let current = this.head;

  while (--position) {
    if (current.next === null) {
      return;
    }
    current = current.next;
  }
  newNode.next = current.next;
  current.next = newNode;
};

linkedList.prototype.deleteNode = function (position) {
  let current = this.head;
  let prev = null;
  while (--position) {
    if (current.next === null) {
      return;
    }
    prev = current;
    current = current.next;
  }
  prev.next = current.next;
  current.next = null;
};

export {linkedList};

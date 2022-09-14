var xiaobai_999 = {

  chunk(array, size) {
    let res = []
    let index = 0;
    let pos = [];
    for (let i = 0; i < array.length; i++) {
      if (index === size) {
        res.push(pos);
        pos = []
        index = 0
      }
      index++;
      pos.push(array[i]);
    }
    if (index !== 0) {
      res.push(pos);
      pos = []
      index = 0
    }
    return res;
  }



}

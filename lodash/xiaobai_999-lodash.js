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
    },

    compact(array) {
      let res = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          res.push(array[i]);
        }
      }
      return res
    },
    fill(array,value) {
      for (let i = 0; i < array.length; i++) {
        array[i] = value
      }
      return array;
    },
    drop(array, num = 1) {
      if (array.length < num) {
        num = array.length
      }
      for (let i = 0; i < num; i++) {
        array.shift();
      }
      return array
    },
    findIndex(array, predicate, fromIndex = 0) {
      if (typeof(predicate) === "function" ) {
        for (let i = fromIndex; i < array.length; i++) {
          if (predicate(array[i])) {
            return i
          }
        }
      }

      if (typeof (predicate) === "object") {
        for (let i = fromIndex; i < array.length; i++) {
          if ((array[i].user === predicate.user) && (array[i].active ===  predicate.active)) {
            return i
          }
        }
      }

      if (Array.isArray(predicate)) {
        // debugger;
        for (let i = fromIndex; i < array.length; i++) {
          for (let j = 1; j < predicate.length; j += 2) {
            const pos = predicate[j - 1];
            if (array[i][pos] === predicate[j]) {
              return i;
            }
          }
        }
      }

      if (typeof(predicate) === 'string') {
        for (let i = fromIndex; i < array.length; i++) {
          if (array[i][predicate]) {
            return i
          }
        }
      }

      return -1;
    },

    findLastIndex(array,predicate,fromIndex = array.length-1) {

    },
    flatten(array) {
      let res = []
      for (let i = 0; i < array.length; i++) {
        const pos = array[i];
        if (Array.isArray(pos)) {
          for (let j = 0; j < pos.length; j++) {
            const pos1 = pos[j];
            res.push(pos1)
          }
        } else {
          res.push(pos)
        }
      }
      return res
    },
    flattenDeep(array) {
      let res = []
      for (let i = 0; i < array.length; i++) {
        const pos = array[i];
        if (Array.isArray(pos)) {
          for (let j = 0; j < pos.length; j++) {
            const pos1 = pos[j];
            res.push(pos1)
          }
        } else {
          res.push(pos)
        }
      }
      return res
    },
  }

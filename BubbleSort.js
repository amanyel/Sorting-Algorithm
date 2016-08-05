/**
 * @author amany
 */

export default class BubbleSort {
  
  static sort(array, comparer = null) {
    let length = array.length;
    let change;
    comparer = comparer || this.compare;

    do {
      change = false;
      for (let i = 1; i < length; i++) {
        if (comparer(array[i - 1], array[i])) {

          [array[i - 1], array[i]] = [array[i], array[i - 1]];

          change = true;
        }
      }

      length--;

    } while (change !== false);

    return array;
  }


  static compare(a, b) {
    return a > b;
  }
}
import { sampleArray } from '../config/config';

class NewArray {
  array: string[];

  constructor () {
    this.array = [...sampleArray];
  };

  append = (start?: string, end?: string) => {
    if (!start && !end) {
      return {
        error: {
          message: 'You must add the start and / or end parameters'
        }
      }
    }

    if (start) this.array.unshift(start);

    if (end) this.array.push(end);

    return { data: { array: this.array } };
  };
}

export default new NewArray();

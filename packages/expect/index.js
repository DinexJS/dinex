export const expect = (a) => {
  return {
    toBe: (b) => {
      if (typeof a === 'object' && a !== null) {
        return JSON.stringify(a) === JSON.stringify(b);
      } else {
        return a === b;
      }
    },
    Not: (s) => {
      return {
        toBe: (b) => {
          return !s.toBe(b);
        },
      };
    },
  };
};

export default function findFrequent(elements: any[]): any {
  const frequencies = new Map<any, number>();

  elements.forEach((el) => {
    if (frequencies.has(el)) {
      frequencies.set(el, frequencies.get(el)! + 1);
    } else {
      frequencies.set(el, 1);
    }
  });

  let currentMostFrequentElement: any = undefined;
  let currentHighestFrequency: number = 0;

  frequencies.forEach((frequency: number, element: any) => {
    if (frequency > currentHighestFrequency) {
      currentMostFrequentElement = element;
      currentHighestFrequency = frequency;
    }
  });

  return currentMostFrequentElement;
}

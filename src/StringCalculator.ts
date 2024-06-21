export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") return 0;

    let delimiter = /,|\n/;
    let numberString = numbers;

    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      const delimiterPart = numbers.substring(2, delimiterEndIndex);
      delimiter = new RegExp(delimiterPart);
      numberString = numbers.substring(delimiterEndIndex + 1);
    }

    const nums = numberString.split(delimiter).map(num => parseInt(num, 10));
    this.checkNegatives(nums);

    return nums.reduce((sum, num) => sum + num, 0);
  }

  private checkNegatives(nums: number[]): void {
    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }
  }
}

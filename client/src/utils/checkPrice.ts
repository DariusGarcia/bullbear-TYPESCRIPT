/**
 * returns the color green if the stock daily % change is greater than zero
 * returns the color red if the stock daily % change is less than zero
 */

const greenRGB: string[] = ['rgba(0, 255, 0, 1)'];
const redRGB: string[] = ['rgba(255, 0, 0, 1)'];

export default function checkPrice(stockData: any[]): string[] {
  if (stockData[0]['changesPercentage'] > 0) {
    return greenRGB;
  } else {
    return redRGB;
  }
}

import { Quality } from "./Quality";

export class QualityCalculator {

  private score = 0;

  rateLocation(quality: string) {
    if (quality == Quality.Excellent) {
      this.score += 10;
    }

    if (quality == Quality.Good) {
      this.score += 7;
    }

    if (quality == Quality.Bad) {
      this.score -= 2;
    }

    if (quality == Quality.Terrible) {
      this.score -= 10;
    }
  }

  rateFacilities(quality: string) {
    if (quality == Quality.Excellent) {
      this.score += 2;
    }

    if (quality == Quality.Good) {
      this.score++;
    }

    if (quality == Quality.Bad) {
      this.score--;
    }

    if (quality == Quality.Terrible) {
      this.score -= 2;
    }
  }

  getScore(): number {
    return this.score;
  }
}
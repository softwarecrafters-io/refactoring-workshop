import { Quality } from "./Quality";

interface RateLocationParams {
  quality: string;
}

export class QualityCalculator {

  private score = 0;

  rateLocation(locationParams: RateLocationParams) {
    if (locationParams.quality == Quality.Excellent) {
      this.score += 10;
    }

    if (locationParams.quality == Quality.Good) {
      this.score += 7;
    }

    if (locationParams.quality == Quality.Bad) {
      this.score -= 2;
    }

    if (locationParams.quality == Quality.Terrible) {
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
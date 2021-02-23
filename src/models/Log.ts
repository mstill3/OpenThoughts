import { Mood } from './Mood';

export default class Log {
  private createdAt: Date;
  private updatedAt: Date;
  private mood: Mood;
  public category: string;
  private negativeThought: string;
  private replacementThought: string;

  static rebuild(iLog) {
    const l = new Log(
      iLog.category,
      iLog.mood,
      iLog.negativeThought,
      iLog.replacementThought,
    );
    l.setCreatedAt(iLog.createdAt);
    l.setUpdatedAt(iLog.updatedAt);
    return l;
  }

  constructor(
    category: string,
    mood: Mood,
    negativeThought: string,
    replacementThought: string,
  ) {
    this.createdAt = new Date();
    this.category = category;
    this.mood = mood;
    this.negativeThought = negativeThought;
    this.replacementThought = replacementThought;
  }

  setCreatedAt(date: Date): void {
    this.createdAt = date;
  }

  setUpdatedAt(date: Date): void {
    this.updatedAt = date;
  }

  setCategory(category: string): void {
    this.category = category;
  }

  setMood(mood: Mood): void {
    this.mood = mood;
  }

  setNegativeThought(negativeThought: string): void {
    this.negativeThought = negativeThought;
  }

  setReplacementThought(replacementThought: string): void {
    this.replacementThought = replacementThought;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  getCategory(): string {
    return this.category;
  }

  getNegativeThought(): string {
    return this.negativeThought;
  }

  getReplacementThought(): string {
    return this.replacementThought;
  }

  getMood(): Mood {
    return this.mood;
  }
}

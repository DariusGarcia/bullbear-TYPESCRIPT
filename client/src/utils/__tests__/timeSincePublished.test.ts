import time_ago from '../timeSincePublished';

describe('time_ago', () => {
  it('returns correct time ago string', () => {
    const now = new Date().getTime();

    expect(time_ago(now)).toBe('Just now');
    expect(time_ago(now - 59 * 1000)).toBe('59 seconds ago');
    expect(time_ago(now - 61 * 1000)).toBe('1 minute ago');
    expect(time_ago(now - 119 * 1000)).toBe('1 minute ago');
    expect(time_ago(now - 60 * 60 * 1000)).toBe('1 hour ago');
    expect(time_ago(now - 25 * 60 * 60 * 1000)).toBe('Yesterday');
    expect(time_ago(now - 48 * 60 * 60 * 1000)).toBe('2 days ago');
    expect(time_ago(now - 7 * 24 * 60 * 60 * 1000)).toBe('Last week');
    expect(time_ago(now - 15 * 24 * 60 * 60 * 1000)).toBe('2 weeks ago');
    expect(time_ago(now - 60 * 24 * 60 * 60 * 1000)).toBe('2 months ago');
    expect(time_ago(now - 365 * 24 * 60 * 60 * 1000)).toBe('Last year');
    expect(time_ago(now - 365 * 2 * 24 * 60 * 60 * 1000)).toBe('2 years ago');
  });
});

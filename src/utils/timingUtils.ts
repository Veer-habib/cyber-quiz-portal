// Nanosecond precision timing utilities
export function getNanosecondTime(): bigint {
  return BigInt(Math.floor(performance.now() * 1_000_000))
}

export function calculateDurationNanoseconds(startTime: bigint, endTime: bigint): bigint {
  return endTime - startTime
}

export function formatNanoseconds(nanoseconds: bigint): string {
  const ns = Number(nanoseconds)
  
  if (ns < 1000) {
    return `${ns.toFixed(0)} ns`
  } else if (ns < 1_000_000) {
    return `${(ns / 1000).toFixed(2)} μs`
  } else if (ns < 1_000_000_000) {
    return `${(ns / 1_000_000).toFixed(2)} ms`
  } else {
    return `${(ns / 1_000_000_000).toFixed(2)} s`
  }
}

export function getTimerPercentage(elapsedTime: bigint, totalTimeSeconds: number): number {
  const totalTimeNs = BigInt(Math.floor(totalTimeSeconds * 1_000_000_000))
  const percentage = (Number(elapsedTime) / Number(totalTimeNs)) * 100
  return Math.min(percentage, 100)
}

export function getTimeRemainingSeconds(elapsedTime: bigint, totalTimeSeconds: number): number {
  const totalTimeNs = BigInt(Math.floor(totalTimeSeconds * 1_000_000_000))
  const remainingNs = totalTimeNs - elapsedTime
  return Math.max(Number(remainingNs) / 1_000_000_000, 0)
}

// For display purposes (milliseconds to readable format)
export function formatSeconds(seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

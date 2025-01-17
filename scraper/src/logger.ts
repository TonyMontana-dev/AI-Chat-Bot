/**
 * This file is used to log the status of the scraper. It prints the number of threads, links crawled, links saved, links skipped, and RAM usage.
 */


import config from '../config.json'
import { stats, numberOfThreads, ramUsage } from './index.js'

console.clear()
console.log('Starting scraper...'.gray)
process.stdout.cursorTo(0, 2) // Normal console logs will start at line 2

// Prints status message
function printStats() {
  process.stdout.write('\u001b[s') // Save cursor position
  process.stdout.cursorTo(0, 0)
  process.stdout.write(
    `(${(numberOfThreads)} / ${config.numberOfThreads}) threads`.bgMagenta.black +
    ` ...`.gray +
    ` ${stats.linksCrawled} crawled`.cyan +
    ` ${stats.linksSaved} saved`.green +
    ` ${stats.linksCrawled - stats.linksSaved} skipped`.yellow +
    ` ${ramUsage}% RAM in use`.white +
    `\n`
  )
  process.stdout.write('\u001b[u') // Restore cursor position
}

// Print status 20 times per second
setInterval(printStats, 1000 / 20)
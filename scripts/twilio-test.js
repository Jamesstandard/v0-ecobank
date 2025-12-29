#!/usr/bin/env node
// Local test script: load env with dotenv and send a test SMS using Twilio
// Usage: node scripts/twilio-test.js <to> [message]

require("dotenv").config()
const twilio = require("twilio")

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const from = process.env.TWILIO_PHONE_NUMBER

if (!accountSid || !authToken || !from) {
  console.error("Missing TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN or TWILIO_PHONE_NUMBER in environment.")
  console.error("Copy .env.example to .env.local and set the real values, then run this script.")
  process.exit(1)
}

const args = process.argv.slice(2)
if (args.length < 1) {
  console.error("Usage: node scripts/twilio-test.js <to> [message]")
  process.exit(1)
}

const to = args[0]
const message = args.slice(1).join(" ") || "Test SMS from v0-ecobank"

const client = twilio(accountSid, authToken)

;(async () => {
  try {
    console.log(`Sending test SMS from ${from} to ${to}...`)
    const res = await client.messages.create({ body: message, from, to })
    console.log("Message sent:", res.sid, "status:", res.status)
    process.exit(0)
  } catch (err) {
    console.error("Error sending test SMS:", err)
    process.exit(2)
  }
})()

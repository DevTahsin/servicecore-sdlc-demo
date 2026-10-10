// Ödeme servisi istemcisi (demo)
const TIMEOUT_MS = 30000; // yoğun saatlerde 10 sn yetmiyordu

function pay(amount) {
  if (!(amount > 0)) throw new Error("Geçersiz tutar");
  return { status: "ok", amount, timeoutMs: TIMEOUT_MS };
}

module.exports = { pay, TIMEOUT_MS };

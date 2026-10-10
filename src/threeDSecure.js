// 3D Secure doğrulama akışı (taslak)
function startChallenge(cardToken) {
  if (!cardToken) throw new Error("Kart bilgisi eksik");
  return { status: "challenge_required", redirectUrl: "https://bank.example/3ds?token=" + encodeURIComponent(cardToken) };
}
module.exports = { startChallenge };

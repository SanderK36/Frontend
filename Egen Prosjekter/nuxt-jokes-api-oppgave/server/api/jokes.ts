export default defineEventHandler(async () => {
  await new Promise(r => setTimeout(r, 800))

  return [
    { id: 1, text: "Hvorfor gikk klokken til legen? Den hadde tikk!" },
    { id: 2, text: "Hva sier en vegg til en annen vegg? Vi ses i hjørnet!" },
    { id: 3, text: "Hvorfor kan man ikke stole på trær? De er så skyggefulle!" }
  ]
})
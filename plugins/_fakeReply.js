import fetch from 'node-fetch'

export async function before(m, { conn }) {
let img = await (await fetch(`https://media.tenor.com/a_ie-YlAL1YAAAAe/blue-archive-tachibana-nozomi.png`)).buffer()

  const canales = [
    {
      id: "120363387495827095@newsletter",
      nombre: "Yelena Proyect 🍭",
    },
    {
      id: "120363387495827095@newsletter",
      nombre: "Yelena Proyect 🍭",
    },
  ]

  const canalSeleccionado = canales[Math.floor(Math.random() * canales.length)]

  global.rcanal = {
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: canalSeleccionado.id,
        serverMessageId: 100,
        newsletterName: canalSeleccionado.nombre,
      },
    },
  }

 global.adReply = {
	    contextInfo: { 
             forwardingScore: 9999, 
                 isForwarded: false, 
                    externalAdReply: {
				    showAdAttribution: true,
					title: botname,
					body: textbot,
					mediaUrl: null,
					description: null,
					previewType: "PHOTO",
					thumbnailUrl: img,
                    thumbnail: img,
		           sourceUrl: canal,
		           mediaType: 1,
                   renderLargerThumbnail: true
				}
			}
		}
}

let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Dev.Daniel;;\nFN:Dev.Daniel\nORG:Dev.Daniel\nTITLE:\nitem1.TEL;waid=51994143761:51994143761\nitem1.X-ABLabel:Dev.Daniel\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:Dev.Daniel\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Dev.Daniel', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler



module.exports ={
    index: async ctx => {
        await strapi.plugins['email'].services.email.send({
            to: 'jose.luis@codesign.mx',
            from: 'jose.luis@codesign.mx',
            replyTo: 'jose.luis@codesign.mx',
            subject: 'Prueba mail strapi',
            text: 'Registro prueba'
        })
        ctx.send('Email enviado')
    }
} 
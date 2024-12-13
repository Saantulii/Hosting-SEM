function showDetails(plan) {
    const details = {
        startup: `
            <h3>StartUp - $17,99 USD/mes</h3>
            <ul>
                <li>1 sitio web</li>
                <li>10 GB de espacio web</li>
                <li>~10,000 visitas al mes</li>
                <li>Tráfico no medido</li>
                <li>Dominio gratis</li>
                <li>Certificados SSL gratuitos</li>
                <li>Correo electrónico gratuito</li>
                <li>Migrador de e-mail gratuito</li>
                <li>Bases de datos ilimitadas</li>
                <li>CDN gratuita</li>
                <li>Copias de seguridad diarias</li>
                <li>Seguridad mejorada</li>
                <li>Caché lista para utilizar</li>
                <li>Compensación de energía 100% renovable</li>
                <li>Garantía de devolución de 30 días</li>
                <li>Colaboradores ilimitados</li>
                <li>Funciones avanzadas de WordPress</li>
            </ul>
        `,
        growbig: `
            <h3>GrowBig - $29,99 USD/mes</h3>
            <ul>
                <li>Sitios web ilimitados</li>
                <li>20 GB de espacio web</li>
                <li>~100,000 visitas al mes</li>
                <li>Tráfico no medido</li>
                <li>Copia de seguridad avanzada</li>
                <li>PHP +30% más rápido</li>
                <li>Staging</li>
            </ul>
        `,
        gogeek: `
            <h3>GoGeek - $44,99 USD/mes</h3>
            <ul>
                <li>Sitios web ilimitados</li>
                <li>40 GB de espacio web</li>
                <li>~400,000 visitas al mes</li>
                <li>Tráfico no medido</li>
                <li>Copia de seguridad avanzada</li>
                <li>PHP +30% más rápido</li>
                <li>Staging + Git</li>
                <li>Clientes de marca blanca</li>
                <li>DNS Privada Gratis</li>
                <li>Nivel más alto de recursos</li>
                <li>Soporte avanzado prioritario</li>
            </ul>
        `
    };

    alert(`Detalles del Plan:\n\n${details[plan]}`);
}

function toggleDetails(planId) {
    // Seleccionar el contenedor de detalles correspondiente
    const planElement = document.getElementById(planId);
    const details = planElement.querySelector('.details');

    // Alternar la clase 'active' para mostrar u ocultar
    details.classList.toggle('active');
}


// Seleccionar todos los elementos <li> de la página
const listItems = document.querySelectorAll('ul li');

// Información adicional para cada <li>
const additionalInfo = {
    "1 sitio web": "Ideal para proyectos personales pequeños.",
    "10 GB de espacio web": "Suficiente para sitios básicos sin muchos archivos multimedia.",
    "~10,000 visitas al mes": "Recomendado para sitios con tráfico moderado.",
    "Tráfico no medido": "No te preocupes por límites de ancho de banda.",
    "Dominio gratis": "Obtén tu dominio sin costo durante el primer año.",
    "Certificados SSL gratuitos": "Asegura tu sitio con HTTPS fácilmente.",
    "Correo electrónico gratuito": "Crea cuentas de correo profesional con tu dominio.",
    "Migrador de e-mail gratuito": "Transfiere tus correos de manera rápida y sencilla.",
    "Bases de datos ilimitadas": "Administra todas las bases de datos que necesites.",
    "CDN gratuita": "Acelera la carga de tu sitio para usuarios globales.",
    "Copias de seguridad diarias": "Protege tus datos con backups automáticos cada día.",
    "Seguridad mejorada": "Mantén tu sitio seguro contra amenazas.",
    "Caché lista para utilizar": "Mejora el rendimiento de tu sitio con caché integrada.",
    "Compensación de energía 100% renovable": "Alojamiento amigable con el medio ambiente.",
    "Garantía de devolución de 30 días": "Prueba sin riesgos, recupera tu dinero si no estás satisfecho.",
    "Colaboradores ilimitados": "Trabaja con tantos usuarios como necesites.",
    "Funciones avanzadas de WordPress": "Optimiza tu experiencia de desarrollo en WordPress.",
    "Sitios web ilimitados": "Aloja tantos proyectos como desees.",
    "20 GB de espacio web": "Perfecto para sitios con contenido multimedia moderado.",
    "~100,000 visitas al mes": "Ideal para sitios con tráfico alto.",
    "Gratis instalación automática de WP": "Configura WordPress con un solo clic.",
    "Gratis migrador automático de WP": "Mueve tu sitio WordPress fácilmente.",
    "Actualizaciones automáticas WP": "Mantén tu sitio siempre actualizado.",
    "Plugin WP Speed Optimizer": "Acelera el tiempo de carga de tu WordPress.",
    "Plugin de seguridad WP": "Protege tu sitio con herramientas avanzadas de seguridad.",
    "WooCommerce habilitado": "Listo para tiendas en línea.",
    "WP CLI y SSH": "Acceso avanzado para desarrolladores.",
    "Funciones exclusivas": "Disfruta de características premium.",
    "Copia de seguridad avanzada": "Realiza backups personalizados según tus necesidades.",
    "PHP +30% más rápido": "Experimenta un rendimiento superior.",
    "Staging": "Prueba cambios antes de hacerlos públicos.",
    "Staging + Git": "Gestión avanzada de versiones y entornos.",
    "Clientes de marca blanca": "Aloja sitios sin referencias a nuestro servicio.",
    "DNS Privada Gratis": "Mejora la profesionalidad de tu marca.",
    "Nivel más alto de recursos": "Máximo rendimiento para tus proyectos más exigentes.",
    "Soporte avanzado prioritario": "Asistencia rápida y dedicada para cualquier problema."
};

// Función para manejar el clic en cada <li>
listItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Elimina cualquier mensaje previo
        const existingMessage = item.querySelector('.info-message');
        if (existingMessage) {
            existingMessage.remove();
        } else {
            // Crear un nuevo mensaje con la información adicional
            const message = document.createElement('div');
            message.classList.add('info-message');
            message.textContent = additionalInfo[item.textContent.trim()] || "Información no disponible.";

            // Estilo para el mensaje
            message.style.marginTop = '10px';
            message.style.padding = '8px';
            message.style.backgroundColor = '#f9f9f9';
            message.style.border = '1px solid #ddd';
            message.style.borderRadius = '5px';
            message.style.fontSize = '14px';

            // Añadir el mensaje debajo del <li>
            item.appendChild(message);
        }
    });
});

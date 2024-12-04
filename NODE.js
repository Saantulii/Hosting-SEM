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

import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {

    await prisma.task.deleteMany() // delete * from task

    await prisma.task.createMany({
        data: [
            { description: 'Diseñar la estructura de la base de datos', complete: true },
            { description: 'Configurar el servidor de desarrollo', complete: false },
            { description: 'Implementar autenticación de usuario', complete: true },
            { description: 'Crear el diseño de la página principal', complete: false },
            { description: 'Desarrollar la API REST para la aplicación', complete: true },
            { description: 'Escribir pruebas unitarias para los componentes', complete: false },
            { description: 'Optimizar el rendimiento de la aplicación', complete: false },
            { description: 'Realizar pruebas de carga en el servidor', complete: false },
            { description: 'Integrar un sistema de pagos', complete: false },
            { description: 'Añadir validación de formularios', complete: true },
            { description: 'Crear la documentación del código', complete: false },
            { description: 'Desplegar la aplicación en el entorno de producción', complete: false },
            { description: 'Implementar la funcionalidad de búsqueda', complete: false },
            { description: 'Configurar el CDN para servir los recursos estáticos', complete: false },
            { description: 'Crear y estilizar la página de contacto', complete: false },
            { description: 'Desarrollar la lógica de negocio en el backend', complete: true },
            { description: 'Configurar la base de datos NoSQL', complete: true },
            { description: 'Implementar el control de acceso basado en roles', complete: true },
            { description: 'Añadir soporte para múltiples idiomas', complete: false },
            { description: 'Realizar auditoría de seguridad', complete: false },
            { description: 'Crear el script de migración de base de datos', complete: false },
            { description: 'Optimizar las consultas a la base de datos', complete: false },
            { description: 'Configurar el sistema de logs', complete: false },
            { description: 'Integrar el servicio de notificaciones push', complete: false },
            { description: 'Diseñar el logo y los elementos gráficos', complete: false },
            { description: 'Implementar la funcionalidad de comentarios', complete: false },
            { description: 'Añadir soporte para autenticación OAuth', complete: false },
            { description: 'Escribir pruebas de integración', complete: false },
            { description: 'Crear y estilizar la página de error 404', complete: true },
            { description: 'Configurar la CI/CD pipeline', complete: true },
            { description: 'Optimizar las imágenes para web', complete: false },
            { description: 'Crear la página de perfil de usuario', complete: false },
            { description: 'Implementar la funcionalidad de favoritos', complete: true },
            { description: 'Realizar pruebas de usabilidad', complete: false },
            { description: 'Configurar el servicio de correo electrónico', complete: false },
            { description: 'Añadir el soporte para PWA', complete: false },
            { description: 'Escribir la política de privacidad', complete: false },
            { description: 'Configurar el sistema de monitoreo', complete: false },
            { description: 'Añadir la funcionalidad de chat en vivo', complete: false },
            { description: 'Implementar el sistema de recomendaciones', complete: false },
            { description: 'Realizar la optimización SEO', complete: false }
        ]
    })


    return NextResponse.json({ msg: 'Seed executed' })
}
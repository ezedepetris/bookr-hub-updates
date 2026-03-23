export const dictionaries = {
  en: {
    backToBookrHub: "Back to BookrHub",
    allUpdates: "All Updates",
    updates: "Updates",
    updatesSubtitle: "The latest features, improvements, and news from BookrHub.",
    readMore: "Read more",
    tryBookrHub: "Try BookrHub for free",
    startFreeTrial: "Start your free trial",
    newFeature: "New Feature",
    improvement: "Improvement",
    categories: {
      "New Feature": "New Feature",
      Improvement: "Improvement",
    },
    footer: "Want to stay updated?",
    localeSwitch: "Español",
  },
  es: {
    backToBookrHub: "Volver a BookrHub",
    allUpdates: "Todas las actualizaciones",
    updates: "Actualizaciones",
    updatesSubtitle: "Las últimas funciones, mejoras y noticias de BookrHub.",
    readMore: "Leer más",
    tryBookrHub: "Prueba BookrHub gratis",
    startFreeTrial: "Comienza tu prueba gratis",
    newFeature: "Nueva Función",
    improvement: "Mejora",
    categories: {
      "New Feature": "Nueva Función",
      Improvement: "Mejora",
    },
    footer: "¿Quieres estar al día?",
    localeSwitch: "English",
  },
};

export function getDictionary(locale: string) {
  return dictionaries[locale as keyof typeof dictionaries] || dictionaries.en;
}

export const updates = {
  en: {
    "launch-new-booking-calendar": {
      date: "March 23, 2026",
      category: "New Feature",
      title: "Launch: New Booking Calendar with Real-Time Availability",
      excerpt:
        "We've completely rebuilt our booking calendar from the ground up with real-time availability, complex scheduling, and calendar sync support.",
      content: `We are excited to announce the launch of our completely rebuilt booking calendar. After months of development and feedback from hundreds of salons, spas, and barbershops, we have created a scheduling experience that handles the complexity of real appointment businesses.

## Real-Time Availability

The new calendar shows availability as it actually exists. When someone books an appointment, the slot immediately becomes unavailable for everyone else. No more double-bookings or scheduling conflicts.

## Complex Scheduling Made Simple

Need to block off lunch hours? Schedule buffer time between appointments? Set different availability for different staff members? The new calendar handles all of this with intuitive controls that take minutes to learn.

- Buffer time between appointments
- Staff-specific schedules
- Seasonal availability
- Holiday closures
- Break time blocks

## Calendar Sync

Connect your Google Calendar, Apple Calendar, or Outlook account. Your appointments automatically sync, and you can view your booking schedule alongside your personal calendar.

## What Is Next

This is just the beginning. In the coming weeks, we will be adding two-way sync so calendar changes automatically update your BookrHub availability, and group booking support for classes and workshops.

All existing users have been automatically upgraded to the new calendar. If you have any questions or feedback, our support team is ready to help.`,
    },
    "whatsapp-reminders-2-0": {
      date: "March 15, 2026",
      category: "Improvement",
      title: "WhatsApp Reminders 2.0: Custom Messages & Multi-Language Support",
      excerpt:
        "Send personalized WhatsApp reminders in Spanish, Portuguese, or English with custom messages for each service type.",
      content: `Your clients will never miss an appointment again. Today we are launching WhatsApp Reminders 2.0 with powerful new features that help reduce no-shows and keep your clients engaged.

## Custom Message Templates

Create personalized message templates for each service type. Remind clients to arrive early for hair coloring, bring specific items for spa treatments, or confirm their appointment time for busy periods.

## Multi-Language Support

Reach clients in their preferred language. BookrHub now supports:

- Spanish (LATAM and Spain variants)
- Portuguese (Brazilian and European)
- English

Messages are sent in the language your client has configured in their profile.

## Smart Timing

Set optimal reminder times based on your business data. Some services need 24-hour reminders, others need a same-day reminder an hour before. The new system learns from your no-show patterns.

## Two-Way Communication

Clients can confirm, reschedule, or ask questions directly from the reminder message. No more phone tag or missed confirmations.

## Getting Started

Existing users will see the new features automatically. Head to Settings > Notifications to customize your message templates and timing.`,
    },
    "multi-location-support": {
      date: "March 8, 2026",
      category: "New Feature",
      title: "Multi-Location Support for Growing Businesses",
      excerpt:
        "Manage all your salons or barbershops from a single dashboard with separate schedules, staff, and services for each location.",
      content: `Expanding to multiple locations is a major milestone for any appointment business. Today we are making that growth easier with full multi-location support in BookrHub.

## Single Dashboard, Multiple Locations

View and manage all your locations from one login. See today's appointments across every salon, track revenue by location, and handle staffing from a unified dashboard.

## Location-Specific Configuration

Each location has its own:

- Business hours and availability
- Service list and pricing
- Staff roster and schedules
- Booking rules and policies

## Cross-Location Reporting

Get a complete picture of your business with reports that aggregate data across all locations, or drill down into individual salon performance.

## Staff Portability

Staff members can work at multiple locations. Schedule your senior stylist at two locations on different days, or let your massage therapist cover all your spa locations as needed.

## Client History Across Locations

A client who visits your downtown location can easily book at your new neighborhood salon. Their history, preferences, and notes follow them everywhere.

## Pricing

Multi-location support is available on our Business plan. Contact our sales team for franchise or chain pricing.`,
    },
    "online-payments-launch": {
      date: "February 28, 2026",
      category: "New Feature",
      title: "Online Payments Now Available in Latin America",
      excerpt:
        "Accept payments online when clients book appointments with MercadoPago, PagSeguro, and major credit cards across LATAM.",
      content: `We are thrilled to announce that online payments are now available for BookrHub users in Latin America. Accept payments at the time of booking and eliminate the hassle of chasing down payments after appointments.

## Payment Providers

We support the most popular payment methods in the region:

- **MercadoPago** (Argentina, Brazil, Mexico, Colombia, Chile)
- **PagSeguro** (Brazil)
- Major credit and debit cards (Visa, Mastercard, American Express)
- Regional payment methods

## How It Works

Clients select their service, choose a time slot, and complete payment in a single flow. They receive a confirmation email and WhatsApp message with their booking details and payment receipt.

## Deposit and Prepayment Options

Require a deposit to secure high-demand appointments. Set percentage or fixed-amount deposits per service. Non-refundable deposits are popular for hair coloring and extensive treatments.

## Instant Payouts

Get your money fast with same-day payouts to your local bank account. No waiting for weekly or monthly settlement cycles.

## Security and Compliance

All payments are processed through PCI-compliant providers. Your clients' payment information is never stored on BookrHub servers.

## Getting Started

Enable payments in Settings > Payments. Connect your preferred provider, configure your payout schedule, and start accepting online bookings today.`,
    },
    "new-dashboard-analytics": {
      date: "February 15, 2026",
      category: "Improvement",
      title: "New Dashboard: Advanced Analytics & Revenue Tracking",
      excerpt:
        "Get deeper insights into your business performance with revenue tracking by service, staff, and time period. Export reports for tax season.",
      content: `Understanding your business performance is crucial for growth. Today we are launching a completely redesigned dashboard with analytics that give you the insights you need to make better decisions.

## Revenue Overview

See your total revenue at a glance. Compare this month to last month, track year-over-year growth, and identify seasonal trends in your business.

## Breakdown by Service

Which services generate the most revenue? Which have the highest margins? The new analytics show performance by individual service, helping you decide what to promote or potentially adjust.

## Staff Performance Metrics

Track revenue generated by each staff member. See their booking rate, average service value, and repeat client percentage. Use this data for performance reviews and incentive programs.

## Client Insights

- New vs returning clients
- Average client lifetime value
- Booking frequency by service type
- Peak booking days and times

## Export for Accountants

Download reports in CSV or PDF format. Pre-built reports for common accounting formats make tax season easier. Your accountant will thank you.

## Custom Date Ranges

Run reports for any date range. Compare Q4 last year to Q4 this year, or analyze your busy season in detail.

## What Is Coming

We are working on automated weekly reports delivered to your email, trend predictions using historical data, and goal tracking so you can set and monitor revenue targets.

All users have access to the new dashboard today. Let us know what metrics you want to see next.`,
    },
  },
  es: {
    "launch-new-booking-calendar": {
      date: "23 de Marzo, 2026",
      category: "New Feature",
      title: "Lanzamiento: Nuevo Calendario de Citas con Disponibilidad en Tiempo Real",
      excerpt:
        "Hemos reconstruido completamente nuestro calendario de reservas con disponibilidad en tiempo real, programación compleja y sincronización con calendarios.",
      content: `Estamos emocionados de anunciar el lanzamiento de nuestro calendario de reservas completamente reconstruido. Después de meses de desarrollo y comentarios de cientos de salones, spas y barberías, hemos creado una experiencia de programación que maneja la complejidad de los negocios reales de citas.

## Disponibilidad en Tiempo Real

El nuevo calendario muestra la disponibilidad tal como existe. Cuando alguien reserva una cita, el horario inmediatamente se vuelve no disponible para todos los demás. Ya no más doble reservas o conflictos de horarios.

## Programación Compleja Hecha Simple

¿Necesitas bloquear la hora del almuerzo? Programar tiempo debuffer entre citas? ¿Establecer diferentes disponibilidad para diferentes miembros del personal? El nuevo calendario maneja todo esto con controles intuitivos que toman minutos para aprender.

- Tiempo de buffer entre citas
- Horarios específicos por personal
- Disponibilidad estacional
- Cierres por feriados
- Bloques de descanso

## Sincronización con Calendarios

Conecta tu Google Calendar, Apple Calendar o cuenta de Outlook. Tus citas se sincronizan automáticamente, y puedes ver tu calendario de reservas junto con tu calendario personal.

## Qué Sigue

Esto es solo el comienzo. En las próximas semanas, agregaremos sincronización bidireccional para que los cambios de calendario actualicen automáticamente tu disponibilidad de BookrHub, y soporte para reservas grupales para clases y talleres.

Todos los usuarios existentes han sido actualizados automáticamente al nuevo calendario. Si tienes alguna pregunta o comentarios, nuestro equipo de soporte está listo para ayudar.`,
    },
    "whatsapp-reminders-2-0": {
      date: "15 de Marzo, 2026",
      category: "Improvement",
      title: "Recordatorios de WhatsApp 2.0: Mensajes Personalizados y Soporte Multiidioma",
      excerpt:
        "Envía recordatorios personalizados de WhatsApp en español, portugués o inglés con mensajes personalizados para cada tipo de servicio.",
      content: `Tus clientes nunca más perderán una cita. Hoy lanzamos WhatsApp Reminders 2.0 con poderosas nuevas funciones que ayudan a reducir las inasistencias y mantener a tus clientes comprometidos.

## Plantillas de Mensajes Personalizados

Crea plantillas de mensajes personalizados para cada tipo de servicio. Recordatorio a los clientes llegar temprano para coloración de cabello, traer elementos específicos para tratamientos de spa, o confirmar su hora de cita para períodos sibukdos.

## Soporte Multiidioma

Llegue a los clientes en su idioma preferido. BookrHub ahora soporta:

- Español (variantes LATAM y España)
- Português (brasileño y europeo)
- Inglés

Los mensajes se envían en el idioma que tu cliente ha configurado en su perfil.

## Tiempo Inteligente

Establece tiempos de recordatorio óptimos basados en los datos de tu negocio. Algunos servicios necesitan recordatorios de 24 horas, otros necesitan un recordatorio el mismo día una hora antes. El nuevo sistema aprende de tus patrones de inasistencias.

## Comunicación Bidireccional

Los clientes pueden confirmar, reprogramar o hacer preguntas directamente desde el mensaje de recordatorio. Ya no más llamadas perdidas o confirmaciones perdidas.

## Cómo Comenzar

Los usuarios existentes verán las nuevas funciones automáticamente. Ve a Configuración > Notificaciones para personalizar tus plantillas de mensajes y tiempos.`,
    },
    "multi-location-support": {
      date: "8 de Marzo, 2026",
      category: "New Feature",
      title: "Soporte Multi-Locación para Negocios en Crecimiento",
      excerpt:
        "Gestiona todos tus salones o barberías desde un solo panel con horarios, personal y servicios separados para cada ubicación.",
      content: `Expandirse a múltiples ubicaciones es un hito importante para cualquier negocio de citas. Hoy hacemos ese crecimiento más fácil con soporte completo multi-locación en BookrHub.

## Un Solo Panel, Múltiples Ubicaciones

Ver y gestionar todas tus ubicaciones desde un solo inicio de sesión. Ve las citas de hoy en cada salon, rastrea ingresos por ubicación y gestiona personal desde un panel unificado.

## Configuración Específica por Ubicación

Cada ubicación tiene su propio:

- Horarios de negocio y disponibilidad
- Lista de servicios y precios
- Lista de personal y horarios
- Reglas y políticas de reservas

## Reportes Multi-Locación

Obtén una imagen completa de tu negocio con reportes que agregan datos en todas las ubicaciones, o profundiza en el rendimiento individual de cada salón.

## Portabilidad del Personal

Los miembros del personal pueden trabajar en múltiples ubicaciones. Programa a tu estilista principal en dos ubicaciones en diferentes días, o deja que tu terapeuta de masajes cubra todas tus ubicaciones de spa según sea necesario.

## Historial del Cliente en Todas las Ubicaciones

Un cliente que visita tu ubicación del centro puede reservar fácilmente en tu nuevo salón de barrio. Su historial, preferencias y notas los acompañan a todas partes.

## Precios

El soporte multi-locación está disponible en nuestro plan Business. Contacta a nuestro equipo de ventas para precios de franquicias o cadenas.`,
    },
    "online-payments-launch": {
      date: "28 de Febrero, 2026",
      category: "New Feature",
      title: "Pagos Online Ahora Disponibles en Latinoamérica",
      excerpt:
        "Acepta pagos online cuando los clientes reservan citas con MercadoPago, PagSeguro y tarjetas de crédito principales en LATAM.",
      content: `Estamos emocionados de anunciar que los pagos online ahora están disponibles para usuarios de BookrHub en Latinoamérica. Acepta pagos al momento de la reserva y elimina la molestia de cobrar después de las citas.

## Proveedores de Pago

Apoyamos los métodos de pago más populares en la región:

- **MercadoPago** (Argentina, Brazil, México, Colombia, Chile)
- **PagSeguro** (Brasil)
- Tarjetas de crédito y débito principales (Visa, Mastercard, American Express)
- Métodos de pago regionales

## Cómo Funciona

Los clientes seleccionan su servicio, eligen un horario y completan el pago en un solo flujo. Reciben un correo electrónico de confirmación y mensaje de WhatsApp con los detalles de su reserva y recibo de pago.

## Opciones de Depósito y Prepago

Requiere un depósito para asegurar citas de alta demanda. Establece depósitos por porcentaje o monto fijo por servicio. Los depósitos no reembolsables son populares para coloración de cabello y tratamientos extensos.

## Pagos Instantáneos

Obtén tu dinero rápido con pagos mismos días a tu cuenta bancaria local. No esperes ciclos de liquidación semanales o mensuales.

## Seguridad y Cumplimiento

Todos los pagos se procesan a través de proveedores compatibles con PCI. La información de pago de tus clientes nunca se almacena en los servidores de BookrHub.

## Cómo Comenzar

Habilita pagos en Configuración > Pagos. Conecta tu proveedor preferido, configura tu programa de pagos y comienza a aceptar reservas online hoy.`,
    },
    "new-dashboard-analytics": {
      date: "15 de Febrero, 2026",
      category: "Improvement",
      title: "Nuevo Panel: Análisis Avanzados y Seguimiento de Ingresos",
      excerpt:
        "Obtén conocimientos más profundos sobre el rendimiento de tu negocio con seguimiento de ingresos por servicio, personal y período. Exporta reportes para la temporada de impuestos.",
      content: `Entender el rendimiento de tu negocio es crucial para el crecimiento. Hoy lanzamos un panel completamente rediseñado con análisis que te dan las perspectivas que necesitas para tomar mejores decisiones.

## Resumen de Ingresos

Ve tus ingresos totales de un vistazo. Compara este mes con el mes pasado, rastrea el crecimiento año tras año e identifica tendencias estacionales en tu negocio.

## Desglose por Servicio

¿Qué servicios generan más ingresos? ¿Cuáles tienen los márgenes más altos? Los nuevos análisis muestran rendimiento por servicio individual, ayudándote a decidir qué promover o potencialmente ajustar.

## Métricas de Rendimiento del Personal

Rastrea ingresos generados por cada miembro del personal. Ve su tasa de reservas, valor promedio del servicio y porcentaje de clientes repetidos. Usa estos datos para evaluaciones de desempeño y programas de incentivos.

## Perspectivas del Cliente

- Clientes nuevos vs recurrentes
- Valor promedio de vida del cliente
- Frecuencia de reservas por tipo de servicio
- Días y horarios pico de reservas

## Exportar para Contadores

Descarga reportes en formato CSV o PDF. Reportes pre-construidos para formatos contables comunes hacen la temporada de impuestos más fácil. Tu contador te agradecerá.

## Rangos de Fechas Personalizados

Ejecuta reportes para cualquier rango de fechas. Compara Q4 del año pasado con Q4 de este año, o analiza tu temporada alta en detalle.

## Qué Viene

Estamos trabajando en reportes semanales automáticos entregados a tu email, predicciones de tendencias usando datos históricos y seguimiento de metas para que puedas establecer y monitorear objetivos de ingresos.

Todos los usuarios tienen acceso al nuevo panel hoy. Cuéntanos qué métricas te gustaría ver a continuación.`,
    },
  },
};

export function getUpdates(locale: string) {
  return updates[locale as keyof typeof updates] || updates.en;
}

export function getUpdate(slug: string, locale: string) {
  const localeUpdates = getUpdates(locale);
  return localeUpdates[slug as keyof typeof localeUpdates];
}

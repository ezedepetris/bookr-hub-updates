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
    "split-opening-hours": {
      date: "March 24, 2026",
      category: "New Feature",
      title: "Set Multiple Opening Hours Per Day with Split Shifts",
      excerpt:
        "Configure your business hours with multiple time blocks per day. Perfect for salons and barbershops with lunch breaks or split operating schedules.",
      content: `We're excited to introduce split opening hours for BookrHub. Now you can configure multiple time blocks per day to match your real operating schedule.

## Why Split Shifts?

Many salons, barbershops, and beauty studios have non-continuous operating hours:

- Lunch breaks or rest periods
- Morning and evening sessions
- Different hours on different days

With split shifts, you can set exactly when you're open and when you're closed throughout the day.

## Features

- **Multiple time blocks per day** — Set as many opening windows as you need

- **Visual schedule display** — Clients see your complete availability at a glance

- **Automatic conflict detection** — Prevents overlapping schedules

- **Day-specific configuration** — Different hours for weekdays vs weekends

## Use Cases

- **Salon with lunch break**: 9AM-1PM and 3PM-8PM

- **Barbershop with morning/evening sessions**: 8AM-12PM and 4PM-9PM

- **Studio with mid-day closure**: 10AM-2PM and 5PM-10PM

## Getting Started

Go to Settings > Company Hours and click "Add Shift" to create multiple time blocks for any day. Clients booking online will only see available time slots within your configured hours.`,
    },
    "online-payments-launch": {
      date: "December 15, 2025",
      category: "New Feature",
      title: "Now Accepting MercadoPago for Online Payments in Latin America",
      excerpt:
        "Accept secure online payments through MercadoPago when clients book appointments. Available across Argentina, Brazil, Mexico, Colombia, and Chile.",
      content: `We are excited to announce that BookrHub now accepts MercadoPago for online payments across Latin America. Now your clients can pay securely at the time of booking, and you get paid instantly.

## Why MercadoPago?

MercadoPago is the leading payment platform in Latin America, trusted by millions of businesses and consumers across the region. By integrating MercadoPago with BookrHub, you can:

- Accept payments in local currency (ARS, BRL, MXN, COP, CLP)
- Get instant settlements to your MercadoPago account
- Offer clients a trusted, familiar payment method
- Reduce no-shows with prepaid appointments

## Supported Countries

MercadoPago is now available for BookrHub users in:

- **Argentina** - Argentine Peso (ARS)
- **Brazil** - Brazilian Real (BRL)
- **Mexico** - Mexican Peso (MXN)
- **Colombia** - Colombian Peso (COP)
- **Chile** - Chilean Peso (CLP)

## How It Works

1. Connect your MercadoPago account in Settings > Payments
2. Enable online payments for your services
3. Clients pay at checkout when booking online
4. You receive instant notifications and same-day payouts

## Deposit and Prepayment Options

Require a deposit to secure high-demand appointments. Set percentage or fixed-amount deposits per service. Non-refundable deposits are popular for hair coloring and extensive treatments.

## Getting Started

Enable payments in Settings > Payments. Connect your MercadoPago account, configure your payout schedule, and start accepting online bookings today.`,
    },
  },
  es: {
    "split-opening-hours": {
      date: "24 de Marzo, 2026",
      category: "Nueva Función",
      title: "Configura Múltiples Horarios de Apertura por Día con Turnos Divididos",
      excerpt:
        "Configura tus horarios de atención con múltiples bloques de tiempo por día. Perfecto para salones y barberías con descansos para almorzar o horarios divididas.",
      content: `Estamos emocionados de presentar los horarios de apertura dividida para BookrHub. Ahora puedes configurar múltiples bloques de tiempo por día para coincidir con tu horario real de atención.

## Por Qué Turnos Divididos?

Muchos salones de belleza, barberías y estudios de estética tienen horarios de operación no continuos:

- Descansos para almuerzo o períodos de descanso
- Sesiones de mañana y noche
- Diferentes horarios en diferentes días

Con los turnos divididos, puedes establecer exactamente cuándo estás abierto y cuándo estás cerrado durante el día.

## Características

- **Múltiples bloques de tiempo por día** — Configura todas las ventanas de apertura que necesites

- **Visualización del horario** — Los clientes ven tu disponibilidad completa de un vistazo

- **Detección automática de conflictos** — Evita horarios superpuestos

- **Configuración por día** — Diferentes horarios para días laborables vs fines de semana

## Casos de Uso

- **Salón con descanso almuerzos**: 9AM-1PM y 3PM-8PM

- **Barbería con sesiones mañana/noche**: 8AM-12PM y 4PM-9PM

- **Estudio con cierre al medio día**: 10AM-2PM y 5PM-10PM

## Cómo Comenzar

Ve a Configuración > Horarios de la Empresa y haz clic en "Agregar Turno" para crear múltiples bloques de tiempo para cualquier día. Los clientes que reserven online solo verán los horarios disponibles dentro de las horas que hayas configurado.`,
    },
    "online-payments-launch": {
      date: "15 de Diciembre, 2025",
      category: "Nueva Función",
      title: "Ahora Aceptamos MercadoPago para Pagos Online en Latinoamérica",
      excerpt:
        "Acepta pagos seguros online a través de MercadoPago cuando los clientes reservan citas. Disponible en Argentina, Brasil, México, Colombia y Chile.",
      content: `Estamos emocionados de anunciar que BookrHub ahora acepta MercadoPago para pagos online en Latinoamérica. Ahora tus clientes pueden pagar de forma segura al momento de hacer la reserva, y tú recibes el pago al instante.

## Por Qué MercadoPago?

MercadoPago es la plataforma de pago líder en Latinoamérica, confiable por millones de negocios y consumidores en la región. Al integrar MercadoPago con BookrHub, puedes:

- Aceptar pagos en moneda local (ARS, BRL, MXN, COP, CLP)
- Obtener liquidaciones instantáneas a tu cuenta de MercadoPago
- Ofrecer a los clientes un método de pago conocido y confiable
- Reducir inasistencias con citas prepagadas

## Países Soportados

MercadoPago ahora está disponible para usuarios de BookrHub en:

- **Argentina** - Peso Argentino (ARS)
- **Brasil** - Real Brasileño (BRL)
- **México** - Peso Mexicano (MXN)
- **Colombia** - Peso Colombiano (COP)
- **Chile** - Peso Chileno (CLP)

## Cómo Funciona

1. Conecta tu cuenta de MercadoPago en Configuración > Pagos
2. Habilita pagos online para tus servicios
3. Los clientes pagan al momento de reservar online
4. Recibes notificaciones instantáneas y pagos mismos días

## Opciones de Depósito y Prepago

Requiere un depósito para asegurar citas de alta demanda. Establece depósitos por porcentaje o monto fijo por servicio. Los depósitos no reembolsables son populares para coloración de cabello y tratamientos extensos.

## Cómo Comenzar

Habilita pagos en Configuración > Pagos. Conecta tu cuenta de MercadoPago, configura tu programa de pagos y comienza a aceptar reservas online hoy.`,
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

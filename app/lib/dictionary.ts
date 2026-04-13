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
    "new-booking-flow": {
      date: "April 3, 2026",
      category: "New Feature",
      title: "Brand New Booking Experience for Business Plans",
      excerpt:
        "A completely redesigned booking flow with worker selection, instant availability, customizable branding, and improved performance for better SEO rankings.",
      images: [
        {
          src: "/booking-step1-services.png",
          alt: "Step 1 - Service selection",
          caption: "Step 1: Clients browse and select from all available services",
        },
        {
          src: "/booking-step2-worker.png",
          alt: "Step 2 - Worker selection",
          caption: "Step 2: Choose a specific worker or select 'Any available' for the first available appointment",
        },
        {
          src: "/booking-step3-time.png",
          alt: "Step 3 - Time selection",
          caption: "Step 3: View all available time slots and pick the one that works best",
        },
        {
          src: "/booking-step4-details.png",
          alt: "Step 4 - Customer details",
          caption: "Step 4: Enter customer details and accept terms and policies",
        },
        {
          src: "/booking-confirmation.png",
          alt: "Booking confirmation screen",
          caption: "New booking confirmation screen with clear summary",
        },
        {
          src: "/booking-payment.png",
          alt: "Payment screen",
          caption: "New payment screen with secure checkout",
        },
        {
          src: "/booking-reschedule.png",
          alt: "Reschedule flow",
          caption: "Easy reschedule and cancellation flow for customers",
        },
      ],
      content: `We're excited to announce a complete overhaul of the booking experience for Business plan users. This new booking flow is designed to provide a seamless, modern experience that matches your brand identity and helps you convert more customers.

## What's New

The new booking flow includes:

- **Worker Selection** — Clients can choose their preferred professional or select "Any available" to get the earliest appointment across all staff
- **Instant Availability** — Real-time display of all available time slots, showing exactly when the next appointment is available
- **Customizable Branding** — Match your landing page colors and logo for a cohesive brand experience
- **Responsive Design** — Optimized for both desktop and mobile devices
- **Improved Performance** — Faster page loads and better SEO optimization for higher search rankings

## Booking Flow Steps

### Step 1: Select a Service
Clients browse through all your services with clear descriptions and pricing. Each service shows duration and category.

### Step 2: Choose Your Professional
Choose a specific worker or select "Any available" — the system will show all time slots where any staff member is free, automatically matching clients with the first available appointment.

### Step 3: Pick a Time
See all available time slots at a glance. The interface clearly shows which slots have earliest availability.

### Step 4: Enter Details
Fill in customer information and accept terms and policies. The form is streamlined for quick completion.

## New Screens

### Booking Confirmation
A clean, professional confirmation screen that summarizes the appointment details, professional assigned, and next steps.

### Payment Screen
New payment interface with support for all configured payment methods. Secure and easy to use.

### Reschedule Flow
Customers can easily reschedule or cancel their booking through a simple, intuitive interface.

## SEO Improvements

The new booking flow is optimized for search engines:

- **Faster Load Times** — Improved performance means better Core Web Vitals scores
- **Structured Data** — Proper schema markup helps Google understand your content
- **Mobile-First Design** — Fully responsive for mobile users, a key ranking factor
- **Clean URLs** — SEO-friendly URL structure

## Only for Business Plans

This new booking experience is available exclusively for Business plan users. It works seamlessly with your custom landing page to provide a complete, branded experience for your clients.

## Getting Started

If you're on the Business plan, the new booking flow is automatically enabled. Customize your colors and logo in Settings > Branding to match your company's identity.`,
    },
    "split-opening-hours": {
      date: "March 24, 2026",
      category: "New Feature",
      title: "Set Multiple Opening Hours Per Day with Split Shifts",
      excerpt:
        "Configure your business hours with multiple time blocks per day. Perfect for salons and barbershops with lunch breaks or split operating schedules.",
      images: [
        {
          src: "/independent-opening-hours.png",
          alt: "Independent Plan - Single shift opening hours",
          caption: "If you have an Independent plan, this is how your business hours will be displayed.",
        },
        {
          src: "/business-opening-hours.png",
          alt: "Business Plan - Multiple shifts opening hours",
          caption: "If you have a Business plan with a custom landing page, this is how they could look like.",
        },
      ],
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

    // April 2026 - Customer Management
    "customer-management": {
      date: "April 1, 2026",
      category: "New Feature",
      title: "New Customer Management System",
      excerpt:
        "Store customer information, view booking history, and automatically link bookings to existing customers for better communication.",
      content: `We're excited to introduce our new Customer Management system. Now you can store and manage all your customer information in one place.

## What's New

- **Customer Database**: Store name, email, phone, and address for each customer
- **Automatic Linking**: Bookings are automatically linked to existing customers by email
- **Booking History**: View complete booking history for each customer
- **Customer Search**: Quick search in booking forms to find existing customers

## Key Features

### Store Customer Information
Keep all your customer details organized:
- First and last name
- Email address
- Phone number
- Address
- Notes

### Automatic Customer Recognition
When a customer books online or you create a booking in the admin:
- If the email already exists → automatically links to that customer
- If it's a new email → creates a new customer profile
- Customer info is updated with the latest details provided

### View Customer History
In the customer edit page, you can see:
- All past bookings for that customer
- Booking status, date, service, and total
- Perfect for tracking customer loyalty and repeat visits

### Quick Customer Search
In the booking form:
- Search dropdown to find existing customers by name or email
- Click to auto-fill customer details
- "New Customer" button to create customers on the fly

## How It Works

### Admin Side
1. Go to Customers in the sidebar to view all customers
2. Add, edit, or delete customers
3. Search customers by name, email, or phone
4. When creating a booking, select an existing customer or create new

### Customer Booking Page
When customers book online:
1. They enter their name, email, and phone
2. If the email matches an existing customer, the booking automatically links to them
3. You can see their full booking history in the customer profile
4. Perfect for sending confirmation emails and tracking repeat customers

## Getting Started

The customer management feature is automatically enabled for all companies. Simply:

1. Visit the Customers section in your admin panel
2. Add existing customers or let them be created automatically
3. View customer profiles to see their booking history
4. Use the search when creating new bookings

Start building your customer database today!`,
    },
  },

  es: {
    "new-booking-flow": {
      date: "3 de Abril, 2026",
      category: "Nueva Función",
      title: "Nueva Experiencia de Reserva para Planes Negocio",
      excerpt:
        "Un flujo de reserva completamente renovado con selección de profesional, disponibilidad instantánea, personalización de marca y mejor rendimiento para SEO.",
      images: [
        {
          src: "/booking-step1-services.png",
          alt: "Paso 1 - Selección de servicio",
          caption: "Paso 1: Los clientes navegan y seleccionan todos los servicios disponibles",
        },
        {
          src: "/booking-step2-worker.png",
          alt: "Paso 2 - Selección de profesional",
          caption: "Paso 2: Elige un profesional específico o selecciona 'Cualquiera disponible' para la primera cita disponible",
        },
        {
          src: "/booking-step3-time.png",
          alt: "Paso 3 - Selección de horario",
          caption: "Paso 3: Ver todos los horarios disponibles y elegir el que mejor funcione",
        },
        {
          src: "/booking-step4-details.png",
          alt: "Paso 4 - Datos del cliente",
          caption: "Paso 4: Ingresa los datos del cliente y acepta términos y políticas",
        },
        {
          src: "/booking-confirmation.png",
          alt: "Pantalla de confirmación de reserva",
          caption: "Nueva pantalla de confirmación con resumen claro",
        },
        {
          src: "/booking-payment.png",
          alt: "Pantalla de pago",
          caption: "Nueva pantalla de pago con checkout seguro",
        },
        {
          src: "/booking-reschedule.png",
          alt: "Flujo de reprogramación",
          caption: "Flujo fácil de reprogramación y cancelación para clientes",
        },
      ],
      content: `Estamos emocionados de anunciar una renovación completa de la experiencia de reserva para usuarios del plan Negocio. Este nuevo flujo de reserva está diseñado para proporcionar una experiencia moderna y fluida que coincide con tu identidad de marca y te ayuda a convertir más clientes.

## Qué Hay de Nuevo

El nuevo flujo de reserva incluye:

- **Selección de Profesional** — Los clientes pueden elegir su profesional preferido o seleccionar "Cualquiera disponible" para obtener la cita más temprana con cualquier staff
- **Disponibilidad Instantánea** — Visualización en tiempo real de todos los horarios disponibles, mostrando exactamente cuándo está disponible la próxima cita
- **Personalización de Marca** — Coincide con los colores y logo de tu landing page para una experiencia de marca coherente
- **Diseño Responsivo** — Optimizado para dispositivos de escritorio y móviles
- **Mejor Rendimiento** — Cargas de página más rápidas y mejor optimización SEO para mejores posiciones en búsquedas

## Pasos del Flujo de Reserva

### Paso 1: Selecciona un Servicio
Los clientes navegan por todos tus servicios con descripciones claras y precios. Cada servicio muestra duración y categoría.

### Paso 2: Elige tu Profesional
Elige un profesional específico o selecciona "Cualquiera disponible" — el sistema mostrará todos los horarios donde cualquier miembro del staff esté libre, emparejando automáticamente a los clientes con la primera cita disponible.

### Paso 3: Elige un Horario
Ver todos los horarios disponibles de un vistazo. La interfaz muestra claramente qué horarios tienen disponibilidad más temprana.

### Paso 4: Ingresa tus Datos
Completa la información del cliente y acepta términos y políticas. El formulario está optimizado para completarlo rápidamente.

## Nuevas Pantallas

### Confirmación de Reserva
Una pantalla de confirmación limpia y profesional que resume los detalles de la cita, el profesional asignado y los próximos pasos.

### Pantalla de Pago
Nueva interfaz de pago con soporte para todos los métodos de pago configurados. Seguro y fácil de usar.

### Flujo de Reprogramación
Los clientes pueden reprogramar o cancelar fácilmente su reserva a través de una interfaz simple e intuitiva.

## Mejoras SEO

El nuevo flujo de reserva está optimizado para motores de búsqueda:

- **Tiempos de Carga Más Rápidos** — Mejor rendimiento significa mejores puntajes de Core Web Vitals
- **Datos Estructurados** — Markup de schema apropiado ayuda a Google a entender tu contenido
- **Diseño Mobile-First** — Totalmente responsivo para usuarios móviles, un factor clave de ranking
- **URLs Limpias** — Estructura de URLs amigable para SEO

## Solo para Planes Negocio

Esta nueva experiencia de reserva está disponible exclusivamente para usuarios del plan Negocio. Funciona perfectamente con tu landing page personalizada para proporcionar una experiencia completa y con marca para tus clientes.

## Cómo Comenzar

Si estás en el plan Negocio, el nuevo flujo de reserva está habilitado automáticamente. Personaliza tus colores y logo en Configuración > Marca para coincidir con la identidad de tu empresa.`,
    },
    "split-opening-hours": {
      date: "24 de Marzo, 2026",
      category: "Nueva Función",
      title: "Configura Múltiples Horarios de Apertura por Día con Turnos Divididos",
      excerpt:
        "Configura tus horarios de atención con múltiples bloques de tiempo por día. Perfecto para salones y barberías con descansos para almorzar o horarios divididas.",
      images: [
        {
          src: "/independent-opening-hours.png",
          alt: "Plan Independiente - Horario de apertura con un solo turno",
          caption: "Si tienes un plan Independiente, así se mostrarán tus horarios de atención.",
        },
        {
          src: "/business-opening-hours.png",
          alt: "Plan Negocio - Horario de apertura con múltiples turnos",
          caption: "Si tienes un plan Negocio con una landing page personalizada, así podrían verse.",
        },
      ],
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

Ve a Configuración > Horarios de la Empresa y haz clic en "Agregar Turno" para crear múltiples bloques de tiempo para cualquier día. Los clientes que reserven online solo veráán los horarios disponibles dentro de las horas que hayas configurado.`,
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

    // April 2026 - Customer Management Spanish
    "customer-management": {
      date: "1 de Abril, 2026",
      category: "Nueva Función",
      title: "Nuevo Sistema de Gestión de Clientes",
      excerpt:
        "Almacena información de clientes, consulta el historial de reservas y vincula automáticamente las reservas a clientes existentes.",
      content: `Estamos emocionados de presentar nuestro nuevo sistema de Gestión de Clientes. Ahora puedes almacenar y gestionar toda la información de tus clientes en un solo lugar.

## Qué Hay de Nuevo

- **Base de Datos de Clientes**: Almacena nombre, email, teléfono y dirección de cada cliente
- **Vinculación Automática**: Las reservas se vinculan automáticamente a clientes existentes por email
- **Historial de Reservas**: Consulta el historial completo de reservas de cada cliente
- **Búsqueda de Clientes**: Búsqueda rápida en formularios de reserva para encontrar clientes existentes

## Características Principales

### Almacena Información de Clientes
Mantén todos los detalles de tus clientes organizados:
- Nombre y apellido
- Dirección de email
- Número de teléfono
- Dirección
- Notas

### Reconocimiento Automático de Clientes
Cuando un cliente reserva online o creas una reserva en el admin:
- Si el email ya existe → se vincula automáticamente a ese cliente
- Si es un email nuevo → se crea un nuevo perfil de cliente
- La información del cliente se actualiza con los últimos datos proporcionados

### Ver Historial del Cliente
En la página de edición del cliente, puedes ver:
- Todas las reservas pasadas de ese cliente
- Estado de reserva, fecha, servicio y total
- Perfecto para rastrear lealtad de clientes y visitas repetidas

### Búsqueda Rápida de Clientes
En el formulario de reserva:
- Menú desplegable para buscar clientes existentes por nombre o email
- Haz clic para autocompletar datos del cliente
- Botón "Nuevo Cliente" para crear clientes sobre la marcha

## Cómo Funciona

### Lado Administrador
1. Ve a Clientes en la barra lateral para ver todos los clientes
2. Agrega, edita o elimina clientes
3. Busca clientes por nombre, email o teléfono
4. Al crear una reserva, selecciona un cliente existente o crea uno nuevo

### Página de Reserva del Cliente
Cuando los clientes reservan online:
1. Ingresan su nombre, email y teléfono
2. Si el email coincide con un cliente existente, la reserva se vincula automáticamente
3. Puedes ver su historial completo de reservas en el perfil del cliente
4. Perfecto para enviar emails de confirmación y rastrear clientes recurrentes

## Cómo Comenzar

La función de gestión de clientes está habilitada automáticamente para todas las empresas. Simplemente:

1. Visita la sección Clientes en tu panel de administración
2. Agrega clientes existentes o déjalos crear automáticamente
3. Consulta los perfiles de clientes para ver su historial de reservas
4. Usa la búsqueda al crear nuevas reservas

¡Comienza a construir tu base de datos de clientes hoy!`,
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
